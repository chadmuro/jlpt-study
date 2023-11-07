import { Model } from "@nozbe/watermelondb";
import { field, writer } from "@nozbe/watermelondb/decorators";

export default class Log extends Model {
  static table = "logs";

  @field("date") date;
  @field("study_count") studyCount;
  @field("review_count") reviewCount;

  @writer async updateReview(dueDate, interval, repetition, efactor) {
    await this.update((review) => {
      review.dueDate = dueDate;
      review.interval = interval;
      review.repetition = repetition;
      review.efactor = efactor;
    });
  }
}
