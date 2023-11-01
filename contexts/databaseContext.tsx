import { createContext, PropsWithChildren, useContext } from "react";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import migrations from "../model/migrations";
import Review from "../model/Review";
import schema from "../model/schema";
import Settings from "../model/Settings";
import Study from "../model/Study";

type DatabaseContextType = {
  database: Database;
};

export const DatabaseContext = createContext<DatabaseContextType | undefined>(
  undefined
);

const DatabaseProvider = ({ children }: PropsWithChildren<unknown>) => {
  // First, create the adapter to the underlying database:
  const adapter = new SQLiteAdapter({
    schema,
    // (You might want to comment it out for development purposes -- see Migrations documentation)
    migrations,
    // (optional database name or file system path)
    // dbName: 'myapp',
    // (recommended option, should work flawlessly out of the box on iOS. On Android,
    // additional installation steps have to be taken - disable if you run into issues...)
    jsi: true /* Platform.OS === 'ios' */,
    // (optional, but you should implement this method)
    onSetUpError: (error) => {
      // Database failed to load -- offer the user to reload the app or log out
    }
  });

  // Then, make a Watermelon database from it!
  const database = new Database({
    adapter,
    modelClasses: [Review, Study, Settings]
  });
  const value = { database };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};

const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};

export { DatabaseProvider, useDatabase };
