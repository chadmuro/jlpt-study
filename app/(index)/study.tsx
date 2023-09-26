import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { Link, useFocusEffect, useRouter } from "expo-router";
import { Button, H3, H4, Text, XStack, YStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyComponent from "../../components/study/StudyComponent";
import { useSession } from "../../contexts/sessionContext";
import { vocabulary } from "../../data/vocabulary";
import { useReview } from "../../hooks/useReview";
import { useStudy } from "../../hooks/useStudy";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

export default function Study() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  const { studyData, isLoading, deleteStudy } = useStudy();
  const { insert, isMutatingInsert } = useReview();

  const { session } = useSession();

  useFocusEffect(() => {
    if (!session) router.push("/");
  });

  const studyCard = vocabulary.find((vocab) => vocab.id === studyData[0]);

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

    await insert([
      {
        user_id: session?.user.id,
        vocabulary_id: studyCard.id,
        due_date: dueDate,
        interval,
        repetition,
        efactor
      }
    ]);

    await deleteStudy({
      user_id: session?.user.id,
      vocabulary_id: studyCard.id
    });

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
        <Text>{studyData.length} cards remaining</Text>
        {studyCard ? (
          <StudyComponent
            cardData={studyCard}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            updateStudy={updateStudy}
            isMutating={isMutatingInsert}
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
