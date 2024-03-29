import { Text } from "tamagui";

import TitleWithBack from "../../../components/common/TitleWIthBack";
import ReviewComponent from "../../../components/grammar/ReviewComponentContainer";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useGrammar } from "../../../contexts/grammarContext";

export default function GrammarReview() {
  const { grammarReviewCards } = useGrammar();

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Grammar Review" />
        <Text>{grammarReviewCards.length} cards remaining</Text>
        <ReviewComponent reviews={grammarReviewCards} />
      </MyStack>
    </SafeAreaView>
  );
}
