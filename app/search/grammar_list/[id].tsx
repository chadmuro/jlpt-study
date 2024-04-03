import { useGlobalSearchParams } from "expo-router";

import TitleWithBack from "../../../components/common/BackButtonTitle";
import GrammarCard from "../../../components/grammar/GrammarCard";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { grammar } from "../../../data/grammar";

export default function Details() {
  const { id } = useGlobalSearchParams();

  const cardData = grammar.find((vocab) => vocab.id === Number(id));

  return (
    <SafeAreaView>
      <MyStack marginBottom="$4">
        <TitleWithBack title="Grammar" />
        {cardData && (
          <GrammarCard
            cardData={cardData}
            showAnswer={true}
          />
        )}
      </MyStack>
    </SafeAreaView>
  );
}
