import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import Review from "../model/Review";
import Study from "../model/Study";
import { generateRandomNumbers } from "../utils/generateNumbers";

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
    efactor: number
  ) => Promise<void>;
  updateReviewCard: (
    review: Review,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number
  ) => Promise<void>;
  loading: boolean;
  updating: boolean;
};

export const StudyContext = createContext<StudyContextType | undefined>(
  undefined
);

const StudyProvider = ({ children }: PropsWithChildren<unknown>) => {
  const database = useDatabase();
  const [study, setStudy] = useState<Study | null>(null);
  const [reviewCards, setReviewCards] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const today = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    async function getInitialLoad() {
      setLoading(true);
      await getTodaysStudy();
      await getTodaysReview();
      setLoading(false);
    }
    getInitialLoad();
  }, []);

  async function getTodaysStudy() {
    const todaysStudy = await database
      .get<Study>("study")
      .query(Q.where("date", today))
      .fetch();

    if (todaysStudy.length > 0) {
      return setStudy(todaysStudy[0]);
    }

    const allReviews = await database.get<Review>("reviews").query().fetch();
    const allReviewIds = allReviews.map((review) => review.vocabularyId);

    const newStudyIds = generateRandomNumbers(20, allReviewIds);

    await database.write(async () => {
      const newStudy = await database.get<Study>("study").create((study) => {
        study.date = today;
        study.vocabularyIds = JSON.stringify(newStudyIds);
      });

      return setStudy(newStudy);
    });
  }

  async function getTodaysReview() {
    const todaysReview = await database
      .get<Review>("reviews")
      .query(Q.where("due_date", Q.lte(today)), Q.sortBy("updated_at", Q.asc))
      .fetch();

    setReviewCards(todaysReview);
  }

  async function updateStudyCard(
    newStudyIds: number[],
    vocabularyId: number,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number
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
    await getTodaysReview();
    setUpdating(false);
  }

  async function updateReviewCard(
    review: Review,
    dueDate: string,
    interval: number,
    repetition: number,
    efactor: number
  ) {
    setUpdating(true);
    await review.updateReview(dueDate, interval, repetition, efactor);
    await getTodaysReview();
    setUpdating(false);
  }

  const studyIds = study ? JSON.parse(study?.vocabularyIds) : [];

  const value = {
    study,
    studyIds,
    reviewCards,
    updateStudyCard,
    updateReviewCard,
    loading,
    updating
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
