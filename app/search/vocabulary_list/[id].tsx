import { useGlobalSearchParams } from "expo-router";

import TitleWithBack from "../../../components/common/BackButtonTitle";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import StudyCard from "../../../components/study/StudyCard";
import { vocabulary } from "../../../data/vocabulary";

export default function Details() {
  const { id } = useGlobalSearchParams();

  const cardData = vocabulary.find((vocab) => vocab.id === Number(id));

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Vocabulary" />
        {cardData && (
          <StudyCard
            cardData={cardData}
            showAnswer={true}
          />
        )}
      </MyStack>
    </SafeAreaView>
  );
}
