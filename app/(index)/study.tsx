import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyComponent from "../../components/study/StudyComponentContainer";
import StudyTitle from "../../components/study/StudyTitle";
import { useStudy } from "../../contexts/studyContext";

export default function Study() {
  const router = useRouter();
  const { study, updating } = useStudy();

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
        <StudyTitle
          study={study}
          text="cards remaining"
        />
        <StudyComponent
          study={study}
          isUpdating={updating}
        />
      </MyStack>
    </SafeAreaView>
  );
}
