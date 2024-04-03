import TitleWithBack from "../../../components/common/BackButtonTitle";
import GrammarTitle from "../../../components/grammar/GrammarTitle";
import StudyComponent from "../../../components/grammar/StudyComponentContainer";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useGrammar } from "../../../contexts/grammarContext";

export default function GrammarStudy() {
  const { grammarStudy, updating } = useGrammar();

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Grammar Study" />
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
