import { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { Info } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Circle,
  H2,
  Paragraph,
  ScrollView,
  View,
  XStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useGrammar } from "../../contexts/grammarContext";
import { useSettings } from "../../contexts/settingsContext";
import { useStudy } from "../../contexts/studyContext";

export default function Home() {
  const { settings } = useSettings();
  const { study, reviewCards, getTodaysReview, getTodaysStudy } = useStudy();
  const {
    grammarStudy,
    grammarReviewCards,
    getTodaysGrammarReview,
    getTodaysGrammarStudy
  } = useGrammar();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await getTodaysStudy();
    await getTodaysReview();
    await getTodaysGrammarStudy();
    await getTodaysGrammarReview();

    setRefreshing(false);
  }, []);

  const vocabularyIds = study ? JSON.parse(study.vocabularyIds) : [];
  const totalVocabularyCount = vocabularyIds.length + reviewCards.length;

  const grammarIds = grammarStudy ? JSON.parse(grammarStudy.grammarIds) : [];
  const totalGrammarCount = grammarIds.length + grammarReviewCards.length;

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
        <ScrollView
          flex={1}
          space="$true"
          refreshControl={
            <RefreshControl
              tintColor="red"
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
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
                right={10}
                top={10}
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
          <View>
            <Button
              size="$6"
              onPress={() => handlePress("grammar")}
            >
              Grammar
            </Button>
            {totalGrammarCount > 0 && (
              <Circle
                position="absolute"
                right={10}
                top={10}
                backgroundColor="red"
                display="flex"
                size="$4"
                justifyContent="center"
                alignContent="center"
              >
                <Paragraph>{totalGrammarCount}</Paragraph>
              </Circle>
            )}
          </View>

          {/* <Button
          size="$6"
          onPress={() => handlePress("kanji")}
        >
          Kanji
        </Button> */}
        </ScrollView>
      </MyStack>
    </SafeAreaView>
  );
}
