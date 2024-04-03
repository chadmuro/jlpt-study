import TitleWithBack from "../../../components/common/BackButtonTitle";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import StudyComponent from "../../../components/study/StudyComponentContainer";
import StudyTitle from "../../../components/study/StudyTitle";
import { useStudy } from "../../../contexts/studyContext";

export default function Study() {
  const { study, updating } = useStudy();

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Vocabulary Study" />
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
