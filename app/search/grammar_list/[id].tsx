import { Link, useGlobalSearchParams } from "expo-router";
import { Button, View, XStack } from "tamagui";

import TitleWithBack from "../../../components/common/TitleWIthBack";
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
        <XStack justifyContent="space-between">
          {Number(id) > 1 ? (
            <Link
              href={`/grammar_list/${Number(id) - 1}`}
              asChild
            >
              <Button>Prev</Button>
            </Link>
          ) : (
            <View />
          )}
          {Number(id) < grammar.length ? (
            <Link
              href={`/grammar_list/${Number(id) + 1}`}
              asChild
            >
              <Button>Next</Button>
            </Link>
          ) : (
            <View />
          )}
        </XStack>
      </MyStack>
    </SafeAreaView>
  );
}
