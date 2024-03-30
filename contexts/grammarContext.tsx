import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import GrammarLog from "../model/GrammarLog";
import GrammarReview from "../model/GrammarReview";
import GrammarStudy from "../model/GrammarStudy";
import { generateRandomNumbers } from "../utils/generateNumbers";
import { shuffleArray } from "../utils/shuffleArray";
import { SuperMemoGrade } from "../utils/supermemo";

type GrammarStudyContextType = {
  grammarStudy: GrammarStudy;
  studyIds: number[];
  grammarReviewCards: GrammarReview[];
  updateGrammarStudyCard: (
    newStudyIds: number[],
    grammarId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) => Promise<void>;
  updateGrammarReviewCard: (
    review: GrammarReview,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) => Promise<void>;
  updating: boolean;
  getTodaysGrammarStudy: () => Promise<void>;
  getTodaysGrammarReview: () => Promise<void>;
};

export const GrammarContext = createContext<
  GrammarStudyContextType | undefined
>(undefined);

const GrammarProvider = ({ children }: PropsWithChildren<unknown>) => {
  const database = useDatabase();
  const [grammarStudy, setGrammarStudy] = useState<GrammarStudy | null>(null);
  const [grammarReviewCards, setGrammarReviewCards] = useState<GrammarReview[]>(
    []
  );
  const [updating, setUpdating] = useState(false);

  async function getTodaysGrammarStudy() {
    const today = dayjs().format("YYYY-MM-DD");
    const todaysStudy = await database
      .get<GrammarStudy>("grammar_study")
      .query(Q.where("date", today))
      .fetch();
    if (todaysStudy.length > 0) {
      return setGrammarStudy(todaysStudy[0]);
    }
    const allReviews = await database
      .get<GrammarReview>("grammar_reviews")
      .query()
      .fetch();
    const allReviewIds = allReviews.map((review) => review.grammarId);
    const newStudyIds = generateRandomNumbers(4, allReviewIds, 138);
    await database.write(async () => {
      const newStudy = await database
        .get<GrammarStudy>("grammar_study")
        .create((study) => {
          study.date = today;
          study.grammarIds = JSON.stringify(newStudyIds);
        });
      return setGrammarStudy(newStudy);
    });
  }

  async function getTodaysGrammarReview() {
    const today = dayjs().format("YYYY-MM-DD");
    const todaysReview = await database
      .get<GrammarReview>("grammar_reviews")
      .query(Q.where("due_date", Q.lte(today)))
      .fetch();
    const reviews = shuffleArray(todaysReview);
    setGrammarReviewCards(reviews);
  }

  async function updateGrammarStudyCard(
    newStudyIds: number[],
    grammarId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) {
    setUpdating(true);
    await grammarStudy.updateGrammarStudy(
      newStudyIds,
      grammarId,
      dueDate,
      interval,
      repetition,
      efactor
    );
    const today = dayjs().format("YYYY-MM-DD");
    await getTodaysGrammarReview();
    await database.write(async () => {
      await database.get<GrammarLog>("grammar_logs").create((log) => {
        log.date = today;
        log.grammarId = grammarId;
        log.studyType = "study";
        log.grade = grade;
      });
    });
    setUpdating(false);
  }

  async function updateGrammarReviewCard(
    review: GrammarReview,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) {
    setUpdating(true);
    await review.updateGrammarReview(dueDate, interval, repetition, efactor);
    const today = dayjs().format("YYYY-MM-DD");
    await getTodaysGrammarReview();
    await database.write(async () => {
      await database.get<GrammarLog>("grammar_logs").create((log) => {
        log.date = today;
        log.grammarId = review.grammarId;
        log.studyType = "review";
        log.grade = grade;
      });
    });
    setUpdating(false);
  }

  const studyIds = grammarStudy ? JSON.parse(grammarStudy?.grammarIds) : [];

  const value = {
    grammarStudy,
    studyIds,
    grammarReviewCards,
    updateGrammarStudyCard,
    updateGrammarReviewCard,
    updating,
    getTodaysGrammarStudy,
    getTodaysGrammarReview
  };

  return (
    <GrammarContext.Provider value={value}>{children}</GrammarContext.Provider>
  );
};

const useGrammar = () => {
  const context = useContext(GrammarContext);
  if (context === undefined) {
    throw new Error("useGrammar must be used within a GrammarProvider");
  }
  return context;
};

export { GrammarProvider, useGrammar };
