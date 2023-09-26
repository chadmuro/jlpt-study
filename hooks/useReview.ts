import {
  useInsertMutation,
  useQuery,
  useUpdateMutation
} from "@supabase-cache-helpers/postgrest-swr";
import dayjs from "dayjs";

import { useSession } from "../contexts/sessionContext";
import { supabase } from "../utils/supabase";

export function useReview() {
  const today = dayjs().format("YYYY-MM-DD");
  const { session } = useSession();

  const { data, error, isLoading } = useQuery(
    supabase
      .from("review")
      .select("due_date, vocabulary_id, interval, repetition, efactor")
      .eq("user_id", session?.user.id)
      .lte("due_date", today)
      .order("updated_at", { ascending: true }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const { trigger: update, isMutating: isMutatingUpdate } = useUpdateMutation(
    supabase.from("review"),
    ["vocabulary_id"],
    "vocabulary_id, due_date, updated_at",
    {
      revalidate: true
    }
  );

  const { trigger: insert, isMutating: isMutatingInsert } = useInsertMutation(
    supabase.from("review"),
    ["vocabulary_id"],
    "vocabulary_id, due_date, updated_at",
    {}
  );

  return {
    data,
    isLoading,
    update,
    insert,
    isMutatingUpdate,
    isMutatingInsert
  };
}
