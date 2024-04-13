import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, Text, XStack, YStack } from "tamagui";

import KanjiTitle from "../../../components/kanji/KanjiTitle";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useKanji } from "../../../contexts/kanjiContext";

export default function Kanji() {
  const { kanjiStudy, kanjiReviewCards } = useKanji();
  const router = useRouter();

  if (!kanjiStudy) return;

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
          <H3>Today&apos;s Kanji</H3>
        </XStack>
        <YStack gap="$2">
          <KanjiTitle
            study={kanjiStudy}
            text="new cards"
          />
          <Button onPress={() => handlePress("kanji/study")}>
            Start study
          </Button>
        </YStack>
        <YStack gap="$2">
          <Text>{kanjiReviewCards.length ?? 0} review cards</Text>
          <Button onPress={() => handlePress("kanji/review")}>
            Start review
          </Button>
        </YStack>
      </MyStack>
    </SafeAreaView>
  );
}
