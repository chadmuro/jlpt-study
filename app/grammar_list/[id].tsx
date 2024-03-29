import { ArrowLeft } from "@tamagui/lucide-icons";
import { Link, useGlobalSearchParams, useRouter } from "expo-router";
import { Button, H3, View, XStack } from "tamagui";

import GrammarCard from "../../components/grammar/GrammarCard";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { grammar } from "../../data/grammar";

export default function Details() {
  const router = useRouter();

  const { id } = useGlobalSearchParams();

  const cardData = grammar.find((vocab) => vocab.id === Number(id));

  return (
    <SafeAreaView>
      <MyStack marginBottom="$4">
        <XStack
          alignItems="center"
          space="$2"
        >
          <Button
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>Grammar</H3>
        </XStack>
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
