import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, Text, XStack } from "tamagui";

import ReviewComponent from "../../../components/grammar/ReviewComponentContainer";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useGrammar } from "../../../contexts/grammarContext";

export default function GrammarReview() {
  const router = useRouter();
  const { grammarReviewCards } = useGrammar();

  return (
    <SafeAreaView>
      <MyStack>
        <XStack
          alignItems="center"
          space="$2"
        >
          <Button
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>Grammar Review</H3>
        </XStack>
        <Text>{grammarReviewCards.length} cards remaining</Text>
        <ReviewComponent reviews={grammarReviewCards} />
      </MyStack>
    </SafeAreaView>
  );
}
