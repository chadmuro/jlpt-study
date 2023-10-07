import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { Button, H4, Text, YStack } from "tamagui";

import { useStudy } from "../../contexts/studyContext";
import { vocabulary } from "../../data/vocabulary";
import Study from "../../model/Study";
import { supermemo, SuperMemoGrade } from "../../utils/supermemo";

import StudyComponent from "./StudyComponent";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: Study;
  isMutating: boolean;
}

function StudyComponentContainer({ study, isMutating }: Props) {
  const { updateStudyCard } = useStudy();
  const [showAnswer, setShowAnswer] = useState(false);

  const ids: number[] = JSON.parse(study.vocabularyIds);
  const studyCard = vocabulary.find((vocab) => vocab.id === ids[0]);

  if (!studyCard) {
    return (
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

    await updateStudyCard(updatedStudyIds);

    // await insert([
    //   {
    //     user_id: session?.user.id,
    //     vocabulary_id: studyCard.id,
    //     due_date: dueDate,
    //     interval,
    //     repetition,
    //     efactor
    //   }
    // ]);

    // await deleteStudy({
    //   user_id: session?.user.id,
    //   vocabulary_id: studyCard.id
    // });

    setShowAnswer(false);
  }

  return (
    <StudyComponent
      cardData={studyCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      updateStudy={updateStudy}
      isMutating={false}
    />
  );
}

const EnhancedStudyComponent = enhance(StudyComponentContainer);
export default EnhancedStudyComponent;