import { useState } from "react";
import {
  useDeleteMutation,
  useInsertMutation,
  useQuery
} from "@supabase-cache-helpers/postgrest-swr";
import dayjs from "dayjs";

import { useSession } from "../contexts/sessionContext";
import { generateRandomNumbers } from "../utils/generateNumbers";
import { supabase } from "../utils/supabase";

export function useStudy() {
  const today = dayjs().format("YYYY-MM-DD");
  const { session } = useSession();
  const [isAddingStudy, setIsAddingStudy] = useState(false);

  // get review cards to exclude and generate todays study
  async function createNewStudy() {
    setIsAddingStudy(true);

    const { data: profileData } = await supabase
      .from("profiles")
      .select("study_updated_at")
      .eq("id", session?.user.id);

    if (profileData[0].study_updated_at == today) {
      return;
    }

    await supabase
      .from("profiles")
      .update({ study_updated_at: today })
      .eq("id", session?.user.id);

    const { data: reviewData } = await supabase
      .from("review")
      .select("vocabulary_id")
      .eq("user_id", session?.user.id);

    if (reviewData) {
      const excludeNumbers = reviewData.map((data) => data.vocabulary_id);
      const newCards = generateRandomNumbers(20, excludeNumbers);

      const insertData = newCards.map((card) => {
        return {
          user_id: session?.user.id,
          date: today,
          vocabulary_id: card
        };
      });

      await insert(insertData);
    }
    setIsAddingStudy(false);
  }

  // get current day study data if exists
  const {
    data: studyData,
    error,
    isLoading
  } = useQuery(
    supabase
      .from("study")
      .select("vocabulary_id")
      .eq("user_id", session?.user.id)
      .eq("date", today),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const { trigger: insert } = useInsertMutation(
    supabase.from("study"),
    ["user_id"],
    "user_id, date, vocabulary_id",
    {
      onSuccess: () => console.log("Success!"),
      revalidate: true
    }
  );

  if (!isLoading && studyData && !studyData[0]) {
    if (!isAddingStudy) {
      console.log("insert to study");
      createNewStudy();
    }
  }

  const { trigger: deleteStudy } = useDeleteMutation(
    supabase.from("study"),
    ["vocabulary_id"],
    "vocabulary_id",
    {}
  );

  return {
    studyData: studyData ? studyData.map((data) => data.vocabulary_id) : [],
    isLoading,
    deleteStudy
  };
}
