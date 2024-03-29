import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, Text, XStack, YStack } from "tamagui";

import TitleWithBack from "../../../components/common/TitleWIthBack";
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
        <TitleWithBack title="Today's Vocabulary" />
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
