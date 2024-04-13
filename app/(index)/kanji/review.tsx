import { Text } from "tamagui";

import TitleWithBack from "../../../components/common/BackButtonTitle";
import ReviewComponent from "../../../components/kanji/ReviewComponentContainer";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useKanji } from "../../../contexts/kanjiContext";

export default function KanjiReview() {
  const { kanjiReviewCards } = useKanji();

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Kanji Review" />
        <Text>{kanjiReviewCards.length} cards remaining</Text>
        <ReviewComponent reviews={kanjiReviewCards} />
      </MyStack>
    </SafeAreaView>
  );
}
