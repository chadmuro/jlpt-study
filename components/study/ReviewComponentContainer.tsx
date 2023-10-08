import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { Button, H4, Text, YStack } from "tamagui";

import { useStudy } from "../../contexts/studyContext";
import { vocabulary } from "../../data/vocabulary";
import Review from "../../model/Review";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

import StudyComponent from "./StudyComponent";

interface Props {
  reviews: Review[];
}

export default function ReviewComponentContainer({ reviews }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { updateReviewCard } = useStudy();

  if (reviews.length === 0) {
    return (
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
    );
  }

  const reviewCard = vocabulary.find(
    (vocab) => vocab.id === reviews[0].vocabularyId
  );

  async function updateStudy(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: reviews[0].interval,
        repetition: reviews[0].repetition,
        efactor: reviews[0].efactor
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    await updateReviewCard(reviews[0], dueDate, interval, repetition, efactor);

    setShowAnswer(false);
  }

  return (
    <StudyComponent
      cardData={reviewCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateStudy}
      isMutating={false}
    />
  );
}
