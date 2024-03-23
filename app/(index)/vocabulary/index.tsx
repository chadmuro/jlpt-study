import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H2, Text, XStack, YStack } from "tamagui";

import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import StudyTitle from "../../../components/study/StudyTitle";
import { useStudy } from "../../../contexts/studyContext";

export default function Kanji() {
  const { study, reviewCards } = useStudy();
  const router = useRouter();

  if (!study) return;

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
          <H2>Vocabulary</H2>
        </XStack>
        <YStack gap="$2">
          <StudyTitle
            study={study}
            text="new cards"
          />
          <Button onPress={() => handlePress("vocabulary/study")}>
            Start study
          </Button>
        </YStack>
        <YStack gap="$2">
          <Text>{reviewCards.length ?? 0} review cards</Text>
          <Button onPress={() => handlePress("vocabulary/review")}>
            Start review
          </Button>
        </YStack>
      </MyStack>
    </SafeAreaView>
  );
}
