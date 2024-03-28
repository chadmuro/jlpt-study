import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, Text, XStack, YStack } from "tamagui";

import GrammarTitle from "../../../components/grammar/GrammarTitle";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useGrammar } from "../../../contexts/grammarContext";

export default function Grammar() {
  const { grammarStudy, grammarReviewCards } = useGrammar();
  const router = useRouter();

  if (!grammarStudy) return;

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

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
          <H3>Today&apos;s Grammar</H3>
        </XStack>
        <YStack gap="$2">
          <GrammarTitle
            study={grammarStudy}
            text="new cards"
          />
          <Button onPress={() => handlePress("grammar/study")}>
            Start study
          </Button>
        </YStack>
        <YStack gap="$2">
          <Text>{grammarReviewCards.length ?? 0} review cards</Text>
          <Button onPress={() => handlePress("grammar/review")}>
            Start review
          </Button>
        </YStack>
      </MyStack>
    </SafeAreaView>
  );
}
