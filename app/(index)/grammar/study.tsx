import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, Text, XStack } from "tamagui";

import GrammarTitle from "../../../components/grammar/GrammarTitle";
import StudyComponent from "../../../components/grammar/StudyComponentContainer";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useGrammar } from "../../../contexts/grammarContext";

export default function GrammarStudy() {
  const router = useRouter();
  const { grammarStudy, updating } = useGrammar();

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
          <H3>Study</H3>
        </XStack>
        <GrammarTitle
          study={grammarStudy}
          text="cards remaining"
        />
        <StudyComponent
          study={grammarStudy}
          isUpdating={updating}
        />
      </MyStack>
    </SafeAreaView>
  );
}
