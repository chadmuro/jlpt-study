import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from "react";
import { Q } from "@nozbe/watermelondb";
import dayjs from "dayjs";

import Review from "../model/Review";
import Study from "../model/Study";
import { generateRandomNumbers } from "../utils/generateNumbers";

import { useDatabase } from "./databaseContext";

type StudyContextType = {
  study: Study;
  studyIds: number[];
  reviewCards: any[];
  updateStudyCard: (newStudyIds: number[]) => Promise<void>;
};

export const StudyContext = createContext<StudyContextType | undefined>(
  undefined
);

const StudyProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { database } = useDatabase();
  const [study, setStudy] = useState<Study | null>(null);
  const [reviewCards, setReviewCards] = useState<any[]>([]);
  const today = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    getTodaysStudy();
    getTodaysReview();
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
      .query(Q.where("due_date", Q.lt(today)))
      .fetch();

    setReviewCards(todaysReview);
  }

  async function updateStudyCard(newStudyIds: number[]) {
    console.log(newStudyIds);
    study.updateStudy(newStudyIds);
  }

  const studyIds = study ? JSON.parse(study?.vocabularyIds) : [];

  const value = {
    study,
    studyIds,
    reviewCards,
    updateStudyCard
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
