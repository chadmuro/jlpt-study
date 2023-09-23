import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { Link, useFocusEffect, useRouter } from "expo-router";
import { Button, H3, H4, Text, XStack, YStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyComponent from "../../components/study/StudyComponent";
import { useSession } from "../../contexts/sessionContext";
import { useVocabulary } from "../../contexts/vocabularyContext";
import { useReview } from "../../hooks/useReview";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

export default function Review() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  // const { todaysReviewCards } = useStudy();
  const { vocabulary } = useVocabulary();
  const { session } = useSession();
  const { data, isLoading, update } = useReview();

  useFocusEffect(() => {
    if (!session) router.push("/");
  });

  if (isLoading) return null;

  const studyCard = vocabulary.find(
    (vocab) => vocab.id === data[0]?.vocabulary_id
  );
  async function updateReview(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: data[0].interval,
        repetition: data[0].repetition,
        efactor: data[0].efactor
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    if (studyCard) {
      const res = await update({
        user_id: session?.user.id,
        vocabulary_id: studyCard.id,
        due_date: dueDate,
        interval,
        repetition,
        efactor,
        updated_at: dayjs(Date.now()).format("YYYY-MM-DD")
      });
      console.log(res);

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
        <Text>{data.length} cards remaining</Text>
        {studyCard ? (
          <StudyComponent
            cardData={studyCard}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            updateStudy={updateReview}
          />
        ) : (
          <YStack>
            <H4>Great job!</H4>
            <Text>Review completed for the day</Text>
            <Link
              href="/"
              asChild
            >
              <Button>Go to home</Button>
            </Link>
          </YStack>
        )}
      </MyStack>
    </SafeAreaView>
  );
}
