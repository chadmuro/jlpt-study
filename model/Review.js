import { Model } from "@nozbe/watermelondb";
import { date, field, writer } from "@nozbe/watermelondb/decorators";

export default class Review extends Model {
  static table = "reviews";

  @field("vocabulary_id") vocabularyId;
  @field("due_date") dueDate;
  @date("updated_at") updatedAt;
  @field("interval") interval;
  @field("repetition") repetition;
  @field("efactor") efactor;

  @writer async updateReview(dueDate, interval, repetition, efactor) {
    await this.update((review) => {
      review.dueDate = dueDate;
      review.interval = interval;
      review.repetition = repetition;
      review.efactor = efactor;
    });
  }
}
