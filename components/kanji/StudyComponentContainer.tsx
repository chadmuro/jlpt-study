import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";

import { useKanji } from "../../contexts/kanjiContext";
import { kanji } from "../../data/kanji";
import KanjiStudy from "../../model/KanjiStudy";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";
import Completed from "../Completed";

import KanjiComponent from "./KanjiComponent";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: KanjiStudy;
  isUpdating: boolean;
}

function StudyComponentContainer({ study, isUpdating }: Props) {
  const { updateKanjiStudyCard } = useKanji();
  const [showAnswer, setShowAnswer] = useState(false);

  const ids: number[] = JSON.parse(study.kanjiIds);
  const studyCard = kanji.find((kan) => kan.id === ids[0]);

  if (!studyCard) {
    return (
      <Completed
        text="Study completed for the day"
        link="/kanji/review"
        buttonText="Go to review"
      />
    );
  }

  async function updateKanjiStudy(grade: SuperMemoGrade) {
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
    await updateKanjiStudyCard(
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
    <KanjiComponent
      cardData={studyCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateKanjiStudy}
      isUpdating={isUpdating}
    />
  );
}

const EnhancedStudyComponent = enhance(StudyComponentContainer);
export default EnhancedStudyComponent;
