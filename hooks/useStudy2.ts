import { useState } from "react";
import { Q } from "@nozbe/watermelondb";
import dayjs from "dayjs";

import { useDatabase } from "../contexts/databaseContext";
import Review from "../model/Review";
import Study from "../model/Study";
import { generateRandomNumbers } from "../utils/generateNumbers";

export function useStudy() {
  const { database } = useDatabase();
  const [studyIds, setStudyIds] = useState<number[]>([]);

  const today = dayjs().format("YYYY-MM-DD");

  async function getTodaysStudy() {
    const todaysStudy = await database
      .get<Study>("study")
      .query(Q.where("date", today))
      .fetch();

    if (todaysStudy.length > 0) {
      const newStudy = JSON.parse(todaysStudy[0].vocabularyIds);
      return setStudyIds(newStudy);
    }

    const allReviews = await database.get<Review>("reviews").query().fetch();
    const allReviewIds = allReviews.map((review) => review.vocabularyId);

    const newStudyIds = generateRandomNumbers(20, allReviewIds);

    await database.write(async () => {
      const newStudy = await database.get<Study>("study").create((study) => {
        study.date = today;
        study.vocabularyIds = JSON.stringify(newStudyIds);
      });

      const newStudyCreated = JSON.parse(newStudy.vocabularyIds);
      return setStudyIds(newStudyCreated);
    });
  }

  return { getTodaysStudy, studyIds };
}
