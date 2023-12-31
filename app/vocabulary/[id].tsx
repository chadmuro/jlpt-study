import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Link, useGlobalSearchParams, useRouter } from "expo-router";
import { Button, H3, View, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyCard from "../../components/study/StudyCard";
import { vocabulary } from "../../data/vocabulary";

export default function Details() {
  const [showAnswer, setShowAnswer] = useState(false);
  const router = useRouter();

  const { id } = useGlobalSearchParams();

  const cardData = vocabulary.find((vocab) => vocab.id === Number(id));

  return (
    <SafeAreaView>
      <MyStack>
        <XStack
          alignItems="center"
          space="$2"
        >
          <Button
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>Vocabulary</H3>
        </XStack>
        {cardData && (
          <StudyCard
            cardData={cardData}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
        )}
        <XStack justifyContent="space-between">
          {Number(id) > 1 ? (
            <Link
              href={`/vocabulary/${Number(id) - 1}`}
              asChild
            >
              <Button onPress={() => setShowAnswer(false)}>Prev</Button>
            </Link>
          ) : (
            <View />
          )}
          {Number(id) < vocabulary.length ? (
            <Link
              href={`/vocabulary/${Number(id) + 1}`}
              asChild
            >
              <Button onPress={() => setShowAnswer(false)}>Next</Button>
            </Link>
          ) : (
            <View />
          )}
        </XStack>
      </MyStack>
    </SafeAreaView>
  );
}
