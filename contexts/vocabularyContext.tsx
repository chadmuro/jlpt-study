import { createContext, PropsWithChildren, useContext } from "react";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";

import { supabase } from "../utils/supabase";

type VocabularyContextType = {
  vocabulary:
    | { id: number; kanji: string; japanese: string; english: string }[]
    | null;
};

export const VocabularyContext = createContext<
  VocabularyContextType | undefined
>(undefined);

const VocabularyProvider = ({ children }: PropsWithChildren<unknown>) => {
  console.log("fetch data");
  const { data, error, isLoading } = useQuery(
    supabase.from("vocabulary").select(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const value = { vocabulary: data };

  return (
    <VocabularyContext.Provider value={value}>
      {children}
    </VocabularyContext.Provider>
  );
};

const useVocabulary = () => {
  const context = useContext(VocabularyContext);
  if (context === undefined) {
    throw new Error("useVocabulary must be used within a VocabularyProvider");
  }
  return context;
};

export { useVocabulary, VocabularyProvider };
