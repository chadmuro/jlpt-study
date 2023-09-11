import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyCard from "../../components/StudyCard";
import { testData } from "../../testData";

export default function Study() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardNumber, setCardNumber] = useState(1);

  return (
    <SafeAreaView>
      <MyStack justifyContent="flex-start">
        <XStack
          alignItems="center"
          space="$2"
        >
          <Button
            icon={ArrowLeft}
            onPress={router.back}
          />
          <H3>Study</H3>
        </XStack>
        <StudyCard
          cardData={testData[cardNumber]}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />

        <XStack gap="$2">
          <Button backgroundColor="$red10">Hard</Button>
          <Button>Mid</Button>
          <Button>Medium</Button>
          <Button
            backgroundColor="$green10"
            onPress={() => {
              setCardNumber((prev) => prev + 1);
              setShowAnswer(false);
            }}
          >
            Easy
          </Button>
        </XStack>
      </MyStack>
    </SafeAreaView>
  );
}
