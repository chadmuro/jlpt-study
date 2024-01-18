import {
  addColumns,
  schemaMigrations
} from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
  migrations: [
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
