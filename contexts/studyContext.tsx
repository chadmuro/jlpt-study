import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import dayjs from "dayjs";

import { generateRandomNumbers } from "../utils/generateNumbers";
import { supabase } from "../utils/supabase";

import { useSession } from "./sessionContext";

type StudyContextType = {
  today: string;
  todaysStudyCards: number[];
  updateTodaysStudy: (id: number) => Promise<void>;
};

export const StudyContext = createContext<StudyContextType | undefined>(
  undefined
);

const StudyProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { session } = useSession();
  const today = dayjs().format("YYYY-MM-DD");
  const [todaysStudyCards, setTodaysStudyCards] = useState<number[]>([]);

  useEffect(() => {
    async function getPersistedData() {
      const savedDay = await AsyncStorage.getItem("today");
      const savedStudyCards = await AsyncStorage.getItem("todaysStudyCards");

      if (today !== savedDay) {
        await AsyncStorage.setItem("today", today);
        const newCards = generateRandomNumbers(20, []);
        setTodaysStudyCards(newCards);
        await AsyncStorage.setItem(
          "todaysStudyCards",
          JSON.stringify(newCards)
        );
      } else {
        setTodaysStudyCards(JSON.parse(savedStudyCards));
      }
    }

    getPersistedData();
  }, []);

  async function updateTodaysStudy(id: number) {
    const updatedStudyCards = todaysStudyCards.filter((item) => item !== id);

    await AsyncStorage.setItem(
      "todaysStudyCards",
      JSON.stringify(updatedStudyCards)
    );
    setTodaysStudyCards(updatedStudyCards);
  }

  const value = {
    todaysStudyCards,
    today,
    updateTodaysStudy
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
