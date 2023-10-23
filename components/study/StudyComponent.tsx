import { View } from "tamagui";

import { SuperMemoGrade } from "../../utils/supermemo";

import StudyButtons from "./StudyButtons";
import StudyCard from "./StudyCard";

interface Props {
  cardData: {
    id: number;
    kanji: string;
    japanese: string;
    english: string;
  };
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  updateStudy: (grade: SuperMemoGrade) => Promise<void>;
  isUpdating: boolean;
}

export default function StudyComponent({
  cardData,
  showAnswer,
  setShowAnswer,
  updateStudy,
  isUpdating
}: Props) {
  return (
    <View gap="$4">
      <StudyCard
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
