import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class Study extends Model {
  static table = "study";

  @field("date") date;
  @field("vocabulary_ids") vocabularyIds;
}
