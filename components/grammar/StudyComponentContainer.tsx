import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import { useGrammar } from "../../contexts/grammarContext";
import { grammar } from "../../data/grammar";
import GrammarStudy from "../../model/GrammarStudy";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";
import Completed from "../Completed";

import GrammarComponent from "./GrammarComponent";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: GrammarStudy;
  isUpdating: boolean;
}

function StudyComponentContainer({ study, isUpdating }: Props) {
  const { updateGrammarStudyCard } = useGrammar();
  const [showAnswer, setShowAnswer] = useState(false);

  const ids: number[] = JSON.parse(study.grammarIds);
  const studyCard = grammar.find((gram) => gram.id === ids[0]);

  if (!studyCard) {
    return (
      <Completed
        text="Study completed for the day"
        link="/grammar/review"
        buttonText="Go to review"
      />
    );
  }

  async function updateGrammarStudy(grade: SuperMemoGrade) {
    const { interval, repetition, efactor } = supermemo(
      {
        interval: 0,
        repetition: 0,
        efactor: 2.5
      },
      grade
    );

    const dueDate = dayjs(Date.now()).add(interval, "day").format("YYYY-MM-DD");

    const updatedStudyIds = ids.filter((id) => id !== studyCard.id);

    setShowAnswer(false);
    await updateGrammarStudyCard(
      updatedStudyIds,
      studyCard.id,
      dueDate,
      interval,
      repetition,
      efactor,
      grade
    );
  }

  return (
    <GrammarComponent
      cardData={studyCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateGrammarStudy}
      isUpdating={isUpdating}
    />
  );
}

const EnhancedStudyComponent = enhance(StudyComponentContainer);
export default EnhancedStudyComponent;
