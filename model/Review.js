import { Model } from "@nozbe/watermelondb";
import { date, field } from "@nozbe/watermelondb/decorators";

export default class Review extends Model {
  static table = "reviews";

  @field("vocabulary_id") vocabularyId;
  @field("due_date") dueDate;
  @date("updated_at") updatedAt;
  @field("interval") interval;
  @field("repetition") repetition;
  @field("efactor") efactor;
}
