import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 5,
  tables: [
    tableSchema({
      name: "reviews",
      columns: [
        { name: "vocabulary_id", type: "number", isIndexed: true },
        { name: "due_date", type: "string" },
        { name: "updated_at", type: "number", isOptional: false },
        { name: "interval", type: "number" },
        { name: "repetition", type: "number" },
        { name: "efactor", type: "number" }
      ]
    }),
    tableSchema({
      name: "study",
      columns: [
        { name: "date", type: "string", isOptional: false },
        { name: "vocabulary_ids", type: "string" }
      ]
    }),
    tableSchema({
      name: "settings",
      columns: [
        { name: "user_id", type: "number", isOptional: false },
        { name: "theme", type: "string" },
        { name: "notification_time", type: "string" },
        { name: "first_open", type: "boolean" },
        { name: "ask_review", type: "number" },
        { name: "display_content", type: "string" }
      ]
    }),
    tableSchema({
      name: "logs",
      columns: [
        { name: "date", type: "string", isOptional: false },
        {
          name: "vocabulary_id",
          type: "number",
          isOptional: false,
          isIndexed: true
        },
        { name: "study_type", type: "string" },
        { name: "grade", type: "number" }
      ]
    }),
    tableSchema({
      name: "grammar_study",
      columns: [
        { name: "date", type: "string", isOptional: false },
        { name: "grammar_ids", type: "string" }
      ]
    }),
    tableSchema({
      name: "grammar_reviews",
      columns: [
        { name: "grammar_id", type: "number", isIndexed: true },
        { name: "due_date", type: "string" },
        { name: "updated_at", type: "number", isOptional: false },
        { name: "interval", type: "number" },
        { name: "repetition", type: "number" },
        { name: "efactor", type: "number" }
      ]
    }),
    tableSchema({
      name: "grammar_logs",
      columns: [
        { name: "date", type: "string", isOptional: false },
        {
          name: "grammar_id",
          type: "number",
          isOptional: false,
          isIndexed: true
        },
        { name: "study_type", type: "string" },
        { name: "grade", type: "number" }
      ]
    }),
    tableSchema({
      name: "kanji_study",
      columns: [
        { name: "date", type: "string", isOptional: false },
        { name: "kanji_ids", type: "string" }
      ]
    }),
    tableSchema({
      name: "kanji_reviews",
      columns: [
        { name: "kanji_id", type: "number", isIndexed: true },
        { name: "due_date", type: "string" },
        { name: "updated_at", type: "number", isOptional: false },
        { name: "interval", type: "number" },
        { name: "repetition", type: "number" },
        { name: "efactor", type: "number" }
      ]
    }),
    tableSchema({
      name: "kanji_logs",
      columns: [
        { name: "date", type: "string", isOptional: false },
        {
          name: "kanji_id",
          type: "number",
          isOptional: false,
          isIndexed: true
        },
        { name: "study_type", type: "string" },
        { name: "grade", type: "number" }
      ]
    })
  ]
});
