import { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import { useRouter } from "expo-router";
import { Button, Circle, ScrollView, Text, View } from "tamagui";

import { useGrammar } from "../contexts/grammarContext";
import { useKanji } from "../contexts/kanjiContext";
import { useStudy } from "../contexts/studyContext";
import Settings from "../model/Settings";

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

interface Props {
  settings: Settings;
  totalVocabularyCount: number;
  totalGrammarCount: number;
  totalKanjiCount: number;
}

const TopButtons = ({
  settings,
  totalVocabularyCount,
  totalGrammarCount,
  totalKanjiCount
}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const { getTodaysReview, getTodaysStudy } = useStudy();
  const { getTodaysGrammarReview, getTodaysGrammarStudy } = useGrammar();
  const { getTodaysKanjiReview, getTodaysKanjiStudy } = useKanji();

  let displayStudy = ["vocabulary", "grammar", "kanji"];
  if (settings.displayContent) {
    displayStudy = settings.displayContent.split(",");
  }

  const showVocabulary = displayStudy.includes("vocabulary");
  const showGrammar = displayStudy.includes("grammar");
  const showKanji = displayStudy.includes("kanji");

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    if (showVocabulary) {
      await getTodaysStudy();
      await getTodaysReview();
    }
    if (showGrammar) {
      await getTodaysGrammarStudy();
      await getTodaysGrammarReview();
    }
    if (showKanji) {
      await getTodaysKanjiStudy();
      await getTodaysKanjiReview();
    }

    setRefreshing(false);
  }, []);

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  return (
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
      {showVocabulary && (
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
              <Text>{totalVocabularyCount}</Text>
            </Circle>
          )}
        </View>
      )}
      {showGrammar && (
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
              <Text>{totalGrammarCount}</Text>
            </Circle>
          )}
        </View>
      )}
      {showKanji && (
        <View>
          <Button
            size="$6"
            onPress={() => handlePress("kanji")}
          >
            Kanji
          </Button>
          {totalKanjiCount > 0 && (
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
              <Text>{totalKanjiCount}</Text>
            </Circle>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const EnhancedTopButtons = enhance(TopButtons);
export default EnhancedTopButtons;
