import { Model } from "@nozbe/watermelondb";
import { field, writer } from "@nozbe/watermelondb/decorators";

export default class KanjiStudy extends Model {
  static table = "kanji_study";

  @field("date") date;
  @field("kanji_ids") kanjiIds;

  @writer async updateKanjiStudy(
    newStudyIds,
    kanjiId,
    dueDate,
    interval,
    repetition,
    efactor
  ) {
    await this.update((study) => {
      study.kanjiIds = JSON.stringify(newStudyIds);
    });

    const newReview = await this.collections
      .get("kanji_reviews")
      .create((review) => {
        review.kanjiId = kanjiId;
        review.dueDate = dueDate;
        review.interval = interval;
        review.repetition = repetition;
        review.efactor = efactor;
      });
    return newReview;
  }
}
