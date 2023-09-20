import { useState } from "react";
import { useUpsertMutation } from "@supabase-cache-helpers/postgrest-swr";
import { ArrowLeft } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { Link, useRouter } from "expo-router";
import { Button, H3, H4, Text, XStack, YStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyComponent from "../../components/study/StudyComponent";
import { useSession } from "../../contexts/sessionContext";
import { useStudy } from "../../contexts/studyContext";
import { useVocabulary } from "../../contexts/vocabularyContext";
import { supabase } from "../../utils/supabase";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

export default function Study() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  const { todaysStudyCards, updateTodaysStudy } = useStudy();
  const { vocabulary } = useVocabulary();
  const { session } = useSession();

  const studyCard = vocabulary.find(
    (vocab) => vocab.id === todaysStudyCards[0]
  );

  const { trigger: upsert } = useUpsertMutation(
    supabase.from("study"),
    ["vocabulary_id"],
    "user_id, vocabulary_id, due_date, interval, repetition, efactor, updated_at",
    {
      onSuccess: () => console.log("Success!")
    }
  );

  async function updateStudy(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: 0,
        repetition: 0,
        efactor: 2.5
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    const res = await upsert([
      {
        user_id: session?.user.id,
        vocabulary_id: studyCard.id,
        due_date: dueDate,
        interval,
        repetition,
        efactor
      }
    ]);

    await updateTodaysStudy(studyCard.id);
    setShowAnswer(false);
  }

  return (
    <SafeAreaView>
      <MyStack justifyContent="flex-start">
        <XStack
          alignItems="center"
          space="$2"
        >
          <Button
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>Study</H3>
        </XStack>
        <Text>{todaysStudyCards.length} cards remaining</Text>
        {studyCard ? (
          <StudyComponent
            cardData={studyCard}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            updateStudy={updateStudy}
          />
        ) : (
          <YStack>
            <H4>Great job!</H4>
            <Text>Study completed for the day</Text>
            <Link
              href="/review"
              asChild
            >
              <Button>Go to review</Button>
            </Link>
          </YStack>
        )}
      </MyStack>
    </SafeAreaView>
  );
}
