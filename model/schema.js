import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
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
    })
  ]
});
