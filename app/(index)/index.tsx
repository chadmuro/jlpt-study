import { Info } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Button, H2, Text, View, XStack, YStack } from "tamagui";

import BarGraph from "../../components/BarGraph";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyTitle from "../../components/study/StudyTitle";
import { useSettings } from "../../contexts/settingsContext";
import { useStudy } from "../../contexts/studyContext";

export default function Home() {
  const { study, reviewCards } = useStudy();
  const { settings } = useSettings();
  const router = useRouter();

  if (!study) return;

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  return (
    <SafeAreaView
      onLayout={() => {
        if (!settings.firstOpen) {
          router.push("/info");
        }
      }}
    >
      <MyStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>Today&apos;s Cards</H2>
          <Link href="/info">
            <Info />
          </Link>
        </XStack>
        <YStack gap="$2">
          <StudyTitle
            study={study}
            text="new cards"
          />
          <Button onPress={() => handlePress("study")}>Start study</Button>
        </YStack>
        <YStack gap="$2">
          <Text>{reviewCards.length ?? 0} review cards</Text>
          <Button onPress={() => handlePress("review")}>Start review</Button>
        </YStack>
        {/* <View
          position="absolute"
          bottom={20}
          left={5}
        >
          <BarGraph />
        </View> */}
      </MyStack>
    </SafeAreaView>
  );
}
