import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class KanjiLog extends Model {
  static table = "kanji_logs";

  @field("date") date;
  @field("kanji_id") kanjiId;
  @field("study_type") studyType;
  @field("grade") grade;
}
