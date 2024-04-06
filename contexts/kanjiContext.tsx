import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import KanjiLog from "../model/KanjiLog";
import KanjiReview from "../model/KanjiReview";
import KanjiStudy from "../model/KanjiStudy";
import { generateRandomNumbers } from "../utils/generateNumbers";
import { shuffleArray } from "../utils/shuffleArray";
import { SuperMemoGrade } from "../utils/supermemo";

type KanjiStudyContextType = {
  kanjiStudy: KanjiStudy;
  studyIds: number[];
  kanjiReviewCards: KanjiReview[];
  updateKanjiStudyCard: (
    newStudyIds: number[],
    kanjiId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) => Promise<void>;
  updateKanjiReviewCard: (
    review: KanjiReview,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) => Promise<void>;
  updating: boolean;
  getTodaysKanjiStudy: () => Promise<void>;
  getTodaysKanjiReview: () => Promise<void>;
};

export const KanjiContext = createContext<KanjiStudyContextType | undefined>(
  undefined
);

const KanjiProvider = ({ children }: PropsWithChildren<unknown>) => {
  const database = useDatabase();
  const [kanjiStudy, setKanjiStudy] = useState<KanjiStudy | null>(null);
  const [kanjiReviewCards, setKanjiReviewCards] = useState<KanjiReview[]>([]);
  const [updating, setUpdating] = useState(false);

  async function getTodaysKanjiStudy() {
    const today = dayjs().format("YYYY-MM-DD");
    const todaysStudy = await database
      .get<KanjiStudy>("kanji_study")
      .query(Q.where("date", today))
      .fetch();
    if (todaysStudy.length > 0) {
      return setKanjiStudy(todaysStudy[0]);
    }
    const allReviews = await database
      .get<KanjiReview>("kanji_reviews")
      .query()
      .fetch();
    const allReviewIds = allReviews.map((review) => review.kanjiId);
    const newStudyIds = generateRandomNumbers(8, allReviewIds, 367);
    await database.write(async () => {
      const newStudy = await database
        .get<KanjiStudy>("kanji_study")
        .create((study) => {
          study.date = today;
          study.kanjiIds = JSON.stringify(newStudyIds);
        });
      return setKanjiStudy(newStudy);
    });
  }

  async function getTodaysKanjiReview() {
    const today = dayjs().format("YYYY-MM-DD");
    const todaysReview = await database
      .get<KanjiReview>("kanji_reviews")
      .query(Q.where("due_date", Q.lte(today)))
      .fetch();
    const reviews = shuffleArray(todaysReview);
    setKanjiReviewCards(reviews);
  }

  async function updateKanjiStudyCard(
    newStudyIds: number[],
    kanjiId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) {
    setUpdating(true);
    await kanjiStudy.updateKanjiStudy(
      newStudyIds,
      kanjiId,
      dueDate,
      interval,
      repetition,
      efactor
    );
    const today = dayjs().format("YYYY-MM-DD");
    await getTodaysKanjiReview();
    await database.write(async () => {
      await database.get<KanjiLog>("kanji_logs").create((log) => {
        log.date = today;
        log.kanjiId = kanjiId;
        log.studyType = "study";
        log.grade = grade;
      });
    });
    setUpdating(false);
  }

  async function updateKanjiReviewCard(
    review: KanjiReview,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number,
    grade: SuperMemoGrade
  ) {
    setUpdating(true);
    await review.updateKanjiReview(dueDate, interval, repetition, efactor);
    const today = dayjs().format("YYYY-MM-DD");
    await getTodaysKanjiReview();
    await database.write(async () => {
      await database.get<KanjiLog>("kanji_logs").create((log) => {
        log.date = today;
        log.kanjiId = review.kanjiId;
        log.studyType = "review";
        log.grade = grade;
      });
    });
    setUpdating(false);
  }

  const studyIds = kanjiStudy ? JSON.parse(kanjiStudy?.kanjiIds) : [];

  const value = {
    kanjiStudy,
    studyIds,
    kanjiReviewCards,
    updateKanjiStudyCard,
    updateKanjiReviewCard,
    updating,
    getTodaysKanjiStudy,
    getTodaysKanjiReview
  };

  return (
    <KanjiContext.Provider value={value}>{children}</KanjiContext.Provider>
  );
};

const useKanji = () => {
  const context = useContext(KanjiContext);
  if (context === undefined) {
    throw new Error("useKanji must be used within a KanjiProvider");
  }
  return context;
};

export { KanjiProvider, useKanji };
