import { useState } from "react";
import dayjs from "dayjs";

import { useGrammar } from "../../contexts/grammarContext";
import { grammar } from "../../data/grammar";
import GrammarReview from "../../model/GrammarReview";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";
import Completed from "../Completed";

import GrammarComponent from "./GrammarComponent";

interface Props {
  reviews: GrammarReview[];
}

export default function ReviewComponentContainer({ reviews }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { updateGrammarReviewCard, updating } = useGrammar();

  if (reviews.length === 0) {
    return (
      <Completed
        text="Review completed for the day"
        link="/grammar"
        buttonText="Go to home"
      />
    );
  }

  const reviewCard = grammar.find((gram) => gram.id === reviews[0].grammarId);

  async function updateGrammarStudy(grade: SuperMemoGrade) {
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
    await updateGrammarReviewCard(
      reviews[0],
      dueDate,
      interval,
      repetition,
      efactor,
      grade
    );
  }

  return (
    <GrammarComponent
      cardData={reviewCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateGrammarStudy}
      isUpdating={updating}
    />
  );
}
