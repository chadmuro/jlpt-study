import { Model } from "@nozbe/watermelondb";
import { field, writer } from "@nozbe/watermelondb/decorators";

export default class Settings extends Model {
  static table = "settings";

  @field("user_id") userId;
  @field("theme") theme;
  @field("notification_time") notificationTime;
  @field("first_open") firstOpen;
  @field("ask_review") askReview;
  @field("display_content") displayContent;

  @writer async updateSetting(column, value) {
    await this.update((settings) => {
      settings[column] = value;
    });
  }
}
