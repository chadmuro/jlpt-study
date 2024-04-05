import { View } from "tamagui";

import { Kanji } from "../../types";
import { SuperMemoGrade } from "../../utils/supermemo";
import StudyButtons from "../StudyButtons";

import KanjiCard from "./KanjiCard";

interface Props {
  cardData: Kanji;
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  updateStudy: (grade: SuperMemoGrade) => Promise<void>;
  isUpdating: boolean;
}

export default function KanjiComponent({
  cardData,
  showAnswer,
  setShowAnswer,
  updateStudy,
  isUpdating
}: Props) {
  return (
    <View
      gap="$4"
      flex={1}
    >
      <KanjiCard
        cardData={cardData}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
      <StudyButtons
        updateStudy={updateStudy}
        isUpdating={isUpdating}
      />
    </View>
  );
}
