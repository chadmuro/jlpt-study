import { Model } from "@nozbe/watermelondb";
import { field, writer } from "@nozbe/watermelondb/decorators";

export default class GramarStudy extends Model {
  static table = "grammar_study";

  @field("date") date;
  @field("grammar_ids") grammarIds;

  @writer async updateGrammarStudy(
    newStudyIds,
    grammarId,
    dueDate,
    interval,
    repetition,
    efactor
  ) {
    await this.update((study) => {
      study.grammarIds = JSON.stringify(newStudyIds);
    });

    const newReview = await this.collections
      .get("grammar_reviews")
      .create((review) => {
        review.grammarId = grammarId;
        review.dueDate = dueDate;
        review.interval = interval;
        review.repetition = repetition;
        review.efactor = efactor;
      });
    return newReview;
  }
}
