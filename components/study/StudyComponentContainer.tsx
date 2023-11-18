import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import { useStudy } from "../../contexts/studyContext";
import { vocabulary } from "../../data/vocabulary";
import Study from "../../model/Study";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";
import Completed from "../Completed";

import StudyComponent from "./StudyComponent";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: Study;
  isUpdating: boolean;
}

function StudyComponentContainer({ study, isUpdating }: Props) {
  const { updateStudyCard } = useStudy();
  const [showAnswer, setShowAnswer] = useState(false);

  const ids: number[] = JSON.parse(study.vocabularyIds);
  const studyCard = vocabulary.find((vocab) => vocab.id === ids[0]);

  if (!studyCard) {
    return (
      <Completed
        text="Study completed for the day"
        link="/review"
        buttonText="Go to review"
      />
    );
  }

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

    const updatedStudyIds = ids.filter((id) => id !== studyCard.id);

    setShowAnswer(false);
    await updateStudyCard(
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
    <StudyComponent
      cardData={studyCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateStudy}
      isUpdating={isUpdating}
    />
  );
}

const EnhancedStudyComponent = enhance(StudyComponentContainer);
export default EnhancedStudyComponent;
