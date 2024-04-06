import { Info } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { H2, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import TopButtons from "../../components/TopButtons";
import { useGrammar } from "../../contexts/grammarContext";
import { useKanji } from "../../contexts/kanjiContext";
import { useSettings } from "../../contexts/settingsContext";
import { useStudy } from "../../contexts/studyContext";

export default function Home() {
  const { settings } = useSettings();
  const { study, reviewCards } = useStudy();
  const { grammarStudy, grammarReviewCards } = useGrammar();
  const { kanjiStudy, kanjiReviewCards } = useKanji();
  const router = useRouter();

  const vocabularyIds = study ? JSON.parse(study.vocabularyIds) : [];
  const totalVocabularyCount = vocabularyIds.length + reviewCards.length;

  const grammarIds = grammarStudy ? JSON.parse(grammarStudy.grammarIds) : [];
  const totalGrammarCount = grammarIds.length + grammarReviewCards.length;

  const kanjiIds = kanjiStudy ? JSON.parse(kanjiStudy.kanjiIds) : [];
  const totalKanjiCount = kanjiIds.length + kanjiReviewCards.length;

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
        <TopButtons
          settings={settings}
          totalVocabularyCount={totalVocabularyCount}
          totalGrammarCount={totalGrammarCount}
          totalKanjiCount={totalKanjiCount}
        />
      </MyStack>
    </SafeAreaView>
  );
}
