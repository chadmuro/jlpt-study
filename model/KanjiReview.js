import { Model } from "@nozbe/watermelondb";
import { date, field, writer } from "@nozbe/watermelondb/decorators";

export default class KanjiReview extends Model {
  static table = "kanji_reviews";

  @field("kanji_id") kanjiId;
  @field("due_date") dueDate;
  @date("updated_at") updatedAt;
  @field("interval") interval;
  @field("repetition") repetition;
  @field("efactor") efactor;

  @writer async updateKanjiReview(dueDate, interval, repetition, efactor) {
    await this.update((review) => {
      review.dueDate = dueDate;
      review.interval = interval;
      review.repetition = repetition;
      review.efactor = efactor;
    });
  }
}
