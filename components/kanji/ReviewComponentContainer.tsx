import { useState } from "react";
import dayjs from "dayjs";

import { useKanji } from "../../contexts/kanjiContext";
import { kanji } from "../../data/kanji";
import KanjiReview from "../../model/KanjiReview";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";
import Completed from "../Completed";

import KanjiComponent from "./KanjiComponent";

interface Props {
  reviews: KanjiReview[];
}

export default function ReviewComponentContainer({ reviews }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { updateKanjiReviewCard, updating } = useKanji();

  if (reviews.length === 0) {
    return (
      <Completed
        text="Review completed for the day"
        link="/kanji"
        buttonText="Go to home"
      />
    );
  }

  const reviewCard = kanji.find((kan) => kan.id === reviews[0].kanjiId);

  async function updateKanjiStudy(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: reviews[0].interval,
        repetition: reviews[0].repetition,
        efactor: reviews[0].efactor
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    setShowAnswer(false);
    await updateKanjiReviewCard(
      reviews[0],
      dueDate,
      interval,
      repetition,
      efactor,
      grade
    );
  }

  return (
    <KanjiComponent
      cardData={reviewCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateKanjiStudy}
      isUpdating={updating}
    />
  );
}
