import { Model } from "@nozbe/watermelondb";
import { field, writer } from "@nozbe/watermelondb/decorators";

export default class Study extends Model {
  static table = "study";

  @field("date") date;
  @field("vocabulary_ids") vocabularyIds;

  @writer async updateStudy(
    newStudyIds,
    vocabularyId,
    dueDate,
    interval,
    repetition,
    efactor
  ) {
    await this.update((study) => {
      study.vocabularyIds = JSON.stringify(newStudyIds);
    });

    const newReview = await this.collections.get("reviews").create((review) => {
      review.vocabularyId = vocabularyId;
      review.dueDate = dueDate;
      review.interval = interval;
      review.repetition = repetition;
      review.efactor = efactor;
    });
    return newReview;
  }
}
