import { useState } from "react";
import { useUpsertMutation } from "@supabase-cache-helpers/postgrest-swr";
import { ArrowLeft } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { Link, useRouter } from "expo-router";
import { Button, H3, Text, View, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyComponent from "../../components/study/StudyComponent";
import { useSession } from "../../contexts/sessionContext";
import { useStudy } from "../../contexts/studyContext";
import { useVocabulary } from "../../contexts/vocabularyContext";
import { supabase } from "../../utils/supabase";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

export default function Review() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  const { todaysReviewCards } = useStudy();
  const { vocabulary } = useVocabulary();
  const { session } = useSession();

  const studyCard = vocabulary.find(
    (vocab) => vocab.id === todaysReviewCards[0]?.vocabulary_id
  );

  const { trigger: upsert } = useUpsertMutation(
    supabase.from("study"),
    ["vocabulary_id"],
    "user_id, vocabulary_id, due_date, interval, repetition, efactor, updated_at",
    {
      onSuccess: () => console.log("Success!")
    }
  );

  async function updateReview(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: todaysReviewCards[0].interval,
        repetition: todaysReviewCards[0].repetition,
        efactor: todaysReviewCards[0].efactor
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    if (studyCard) {
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

      setShowAnswer(false);
    }
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
          <H3>Review</H3>
        </XStack>
        {studyCard ? (
          <StudyComponent
            cardData={studyCard}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            updateStudy={updateReview}
          />
        ) : (
          <View>
            <Text>Review completed for the day</Text>
            <Link
              href="/"
              asChild
            >
              <Button>Go to home</Button>
            </Link>
          </View>
        )}
      </MyStack>
    </SafeAreaView>
  );
}
