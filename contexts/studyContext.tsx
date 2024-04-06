import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import Log from "../model/Log";
import Review from "../model/Review";
import Study from "../model/Study";
import { generateRandomNumbers } from "../utils/generateNumbers";
import { shuffleArray } from "../utils/shuffleArray";
import { SuperMemoGrade } from "../utils/supermemo";

type StudyContextType = {
  study: Study;
  studyIds: number[];
  reviewCards: Review[];
  updateStudyCard: (
    newStudyIds: number[],
    vocabularyId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) => Promise<void>;
  updateReviewCard: (
    review: Review,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) => Promise<void>;
  updating: boolean;
  getTodaysStudy: () => Promise<void>;
  getTodaysReview: () => Promise<void>;
};

export const StudyContext = createContext<StudyContextType | undefined>(
  undefined
);

const StudyProvider = ({ children }: PropsWithChildren<unknown>) => {
  const database = useDatabase();
  const [study, setStudy] = useState<Study | null>(null);
  const [reviewCards, setReviewCards] = useState<Review[]>([]);
  const [updating, setUpdating] = useState(false);

  async function getTodaysStudy() {
    const today = dayjs().format("YYYY-MM-DD");
    const todaysStudy = await database
      .get<Study>("study")
      .query(Q.where("date", today))
      .fetch();

    if (todaysStudy.length > 0) {
      return setStudy(todaysStudy[0]);
    }

    const allReviews = await database.get<Review>("reviews").query().fetch();
    const allReviewIds = allReviews.map((review) => review.vocabularyId);

    const newStudyIds = generateRandomNumbers(20, allReviewIds, 2273);

    await database.write(async () => {
      const newStudy = await database.get<Study>("study").create((study) => {
        study.date = today;
        study.vocabularyIds = JSON.stringify(newStudyIds);
      });

      return setStudy(newStudy);
    });
  }

  async function getTodaysReview() {
    const today = dayjs().format("YYYY-MM-DD");
    const todaysReview = await database
      .get<Review>("reviews")
      .query(Q.where("due_date", Q.lte(today)))
      .fetch();
    const reviews = shuffleArray(todaysReview);
    setReviewCards(reviews);
  }

  async function updateStudyCard(
    newStudyIds: number[],
    vocabularyId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) {
    setUpdating(true);
    await study.updateStudy(
      newStudyIds,
      vocabularyId,
      dueDate,
      interval,
      repetition,
      efactor
    );
    const today = dayjs().format("YYYY-MM-DD");
    await getTodaysReview();
    await database.write(async () => {
      await database.get<Log>("logs").create((log) => {
        log.date = today;
        log.vocabularyId = vocabularyId;
        log.studyType = "study";
        log.grade = grade;
      });
    });
    setUpdating(false);
  }

  async function updateReviewCard(
    review: Review,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) {
    setUpdating(true);
    await review.updateReview(dueDate, interval, repetition, efactor);
    const today = dayjs().format("YYYY-MM-DD");
    await getTodaysReview();
    await database.write(async () => {
      await database.get<Log>("logs").create((log) => {
        log.date = today;
        log.vocabularyId = review.vocabularyId;
        log.studyType = "review";
        log.grade = grade;
      });
    });
    setUpdating(false);
  }

  const studyIds = study ? JSON.parse(study?.vocabularyIds) : [];

  const value = {
    study,
    studyIds,
    reviewCards,
    updateStudyCard,
    updateReviewCard,
    updating,
    getTodaysStudy,
    getTodaysReview
  };

  return (
    <StudyContext.Provider value={value}>{children}</StudyContext.Provider>
  );
};

const useStudy = () => {
  const context = useContext(StudyContext);
  if (context === undefined) {
    throw new Error("useStudy must be used within a StudyProvider");
  }
  return context;
};

export { StudyProvider, useStudy };
