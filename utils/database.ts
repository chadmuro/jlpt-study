import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import GrammarLog from "../model/GrammarLog";
import GrammarReview from "../model/GrammarReview";
import GrammarStudy from "../model/GrammarStudy";
import KanjiLog from "../model/KanjiLog";
import KanjiReview from "../model/KanjiReview";
import KanjiStudy from "../model/KanjiStudy";
import Log from "../model/Log";
import migrations from "../model/migrations";
import Review from "../model/Review";
import schema from "../model/schema";
import Settings from "../model/Settings";
import Study from "../model/Study";

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
  modelClasses: [
    Review,
    Study,
    Settings,
    Log,
    GrammarStudy,
    GrammarReview,
    GrammarLog,
    KanjiStudy,
    KanjiReview,
    KanjiLog
  ]
});

export default database;
