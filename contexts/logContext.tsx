import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";

import GrammarLog from "../model/GrammarLog";
import Log from "../model/Log";

type LogsContextType = {
  logs: [string, number][];
  grammarLogs: [string, number][];
  getLogs: () => Promise<void>;
};

export const LogsContext = createContext<LogsContextType | undefined>(
  undefined
);

const LogsProvider = ({ children }: PropsWithChildren<unknown>) => {
  const database = useDatabase();
  const [logs, setLogs] = useState<[string, number][]>([]);
  const [grammarLogs, setGrammarLogs] = useState<[string, number][]>([]);

  async function getLogs() {
    const dbLogs = await database
      .get<Log>("logs")
      .query(Q.where("grade", 0))
      .fetch();

    const idCounts = {};

    // Iterate through the array and count each id
    dbLogs.forEach((obj) => {
      const id = obj.vocabularyId;
      if (idCounts[id]) {
        idCounts[id]++;
      } else {
        idCounts[id] = 1;
      }
    });

    // Convert object to array of key-value pairs
    const countsArray = Object.entries(idCounts);

    // Sort the array based on the count (second element of each pair)
    const sortedArray = countsArray.sort(
      (a: [string, number], b: [string, number]) => b[1] - a[1]
    ) as [string, number][];

    setLogs(sortedArray);

    const dbGrammarLogs = await database
      .get<GrammarLog>("grammar_logs")
      .query(Q.where("grade", 0))
      .fetch();

    const grammarIdCounts = {};

    // Iterate through the array and count each id
    dbGrammarLogs.forEach((obj) => {
      const id = obj.grammarId;
      if (grammarIdCounts[id]) {
        grammarIdCounts[id]++;
      } else {
        grammarIdCounts[id] = 1;
      }
    });

    // Convert object to array of key-value pairs
    const grammarCountsArray = Object.entries(grammarIdCounts);

    // Sort the array based on the count (second element of each pair)
    const grammarSortedArray = grammarCountsArray.sort(
      (a: [string, number], b: [string, number]) => b[1] - a[1]
    ) as [string, number][];

    setGrammarLogs(grammarSortedArray);
  }

  const value = {
    logs,
    grammarLogs,
    getLogs
  };

  return <LogsContext.Provider value={value}>{children}</LogsContext.Provider>;
};

const useLogs = () => {
  const context = useContext(LogsContext);
  if (context === undefined) {
    throw new Error("useLogs must be used within a LogsProvider");
  }
  return context;
};

export { LogsProvider, useLogs };
