import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import dayjs from "dayjs";
import { Link, useFocusEffect, useRouter } from "expo-router";
import { Button, H3, H4, Text, XStack, YStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import ReviewComponent from "../../components/study/ReviewComponentContainer";
import { useStudy } from "../../contexts/studyContext";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

export default function Review() {
  const router = useRouter();
  const { reviewCards } = useStudy();

  // const studyCard = vocabulary.find(
  //   (vocab) => vocab.id === reviewCards[0]?.vocabularyId
  // );

  async function updateReview(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: 1,
        repetition: 1,
        efactor: 1
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    // if (studyCard) {
    // const res = await update({
    //   user_id: session?.user.id,
    //   vocabulary_id: studyCard.id,
    //   due_date: dueDate,
    //   interval,
    //   repetition,
    //   efactor,
    //   updated_at: dayjs(Date.now()).format("YYYY-MM-DD")
    // });
    // console.log(res);

    // setShowAnswer(false);
    // }
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
        <Text>{reviewCards.length} cards remaining</Text>
        <ReviewComponent reviews={reviewCards} />
      </MyStack>
    </SafeAreaView>
  );
}
