import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { Button, H3, XStack } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import StudyCard from "../../components/StudyCard";
import { useVocabulary } from "../../contexts/vocabularyContext";

export default function Details() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { vocabulary } = useVocabulary();
  const router = useRouter();

  const { id } = useGlobalSearchParams();

  const cardData = vocabulary.find((vocab) => vocab.id === Number(id));

  return (
    <MySafeAreaView>
      <MyStack justifyContent="flex-start">
        <XStack
          alignItems="center"
          space="$2"
        >
          <Button
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>{cardData.kanji}</H3>
        </XStack>
        <StudyCard
          cardData={cardData}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />
      </MyStack>
    </MySafeAreaView>
  );
}
