import { useGlobalSearchParams } from "expo-router";

import TitleWithBack from "../../../components/common/BackButtonTitle";
import KanjiCard from "../../../components/kanji/KanjiCard";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { kanji } from "../../../data/kanji";

export default function Details() {
  const { id } = useGlobalSearchParams();

  const cardData = kanji.find((kan) => kan.id === Number(id));

  return (
    <SafeAreaView>
      <MyStack marginBottom="$4">
        <TitleWithBack title="Kanji" />
        {cardData && (
          <KanjiCard
            cardData={cardData}
            showAnswer={true}
          />
        )}
      </MyStack>
    </SafeAreaView>
  );
}
