import { Model } from "@nozbe/watermelondb";
import { writer } from "@nozbe/watermelondb/decorators";
import { field } from "@nozbe/watermelondb/decorators";

export default class Study extends Model {
  static table = "study";

  @field("date") date;
  @field("vocabulary_ids") vocabularyIds;

  @writer async updateStudy(ids) {
    await this.update((study) => {
      study.vocabularyIds = JSON.stringify(ids);
    });
  }
}
