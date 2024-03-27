import {
  addColumns,
  createTable,
  schemaMigrations
} from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
  migrations: [
    {
      toVersion: 3,
      steps: [
        createTable({
          name: "grammar_study",
          columns: [
            { name: "date", type: "string", isOptional: false },
            { name: "grammar_ids", type: "string" }
          ]
        }),
        createTable({
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
        createTable({
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
        })
      ]
    },
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: "settings",
          columns: [{ name: "ask_review", type: "number" }]
        })
      ]
    }
  ]
});
