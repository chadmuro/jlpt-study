import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class Log extends Model {
  static table = "logs";

  @field("date") date;
  @field("vocabulary_id") vocabularyId;
  @field("study_type") studyType;
  @field("grade") grade;
}
