import { useState } from "react";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyButtons from "../../components/study/StudyButtons";
import StudyCard from "../../components/study/StudyCard";
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

        <StudyButtons />
      </MyStack>
    </SafeAreaView>
  );
}
