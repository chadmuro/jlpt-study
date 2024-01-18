import * as StoreReview from "expo-store-review";

import { useSettings } from "../contexts/settingsContext";

// Update number later if want to ask for reviews again in future
const REVIEW_COUNT = 0;

export function useAskReview() {
  const { settings, updateAskReview } = useSettings();

  async function askReview() {
    if (settings.askReview === REVIEW_COUNT) {
      if (await StoreReview.hasAction()) {
        await StoreReview.requestReview();
        updateAskReview(REVIEW_COUNT + 1);
      }
    }
  }

  return { askReview };
}
