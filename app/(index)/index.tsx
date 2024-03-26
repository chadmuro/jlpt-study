import { Info } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Button, Circle, H2, Paragraph, View, XStack } from "tamagui";

import BarGraph from "../../components/BarGraph";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useSettings } from "../../contexts/settingsContext";
import { useStudy } from "../../contexts/studyContext";

export default function Home() {
  const { settings } = useSettings();
  const { study, reviewCards } = useStudy();
  const router = useRouter();

  const vocabularyIds = study ? JSON.parse(study.vocabularyIds) : [];
  const totalVocabularyCount = vocabularyIds.length + reviewCards.length;

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
          <H2>Today&apos;s Study</H2>
          <Link href="/info">
            <Info />
          </Link>
        </XStack>
        <View>
          <Button
            size="$6"
            onPress={() => handlePress("vocabulary")}
          >
            Vocabulary
          </Button>
          {totalVocabularyCount > 0 && (
            <Circle
              position="absolute"
              right={0}
              top={-10}
              backgroundColor="red"
              display="flex"
              size="$4"
              justifyContent="center"
              alignContent="center"
            >
              <Paragraph>{totalVocabularyCount}</Paragraph>
            </Circle>
          )}
        </View>
        {/* <Button
          size="$6"
          onPress={() => handlePress("grammar")}
        >
          Grammar
        </Button> */}
        {/* <Button
          size="$6"
          onPress={() => handlePress("kanji")}
        >
          Kanji
        </Button> */}
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
