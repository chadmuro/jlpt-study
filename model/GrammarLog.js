import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class GrammarLog extends Model {
  static table = "grammar_logs";

  @field("date") date;
  @field("grammar_id") grammarId;
  @field("study_type") studyType;
  @field("grade") grade;
}
