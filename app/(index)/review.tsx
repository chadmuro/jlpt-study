import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, Text, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import ReviewComponent from "../../components/study/ReviewComponentContainer";
import { useStudy } from "../../contexts/studyContext";

export default function Review() {
  const router = useRouter();
  const { reviewCards } = useStudy();

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
          <H3>Review</H3>
        </XStack>
        <Text>{reviewCards.length} cards remaining</Text>
        <ReviewComponent reviews={reviewCards} />
      </MyStack>
    </SafeAreaView>
  );
}
