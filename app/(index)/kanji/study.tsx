import TitleWithBack from "../../../components/common/BackButtonTitle";
import KanjiTitle from "../../../components/kanji/KanjiTitle";
import StudyComponent from "../../../components/kanji/StudyComponentContainer";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { useKanji } from "../../../contexts/kanjiContext";

export default function KanjiStudy() {
  const { kanjiStudy, updating } = useKanji();

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Kanji Study" />
        <KanjiTitle
          study={kanjiStudy}
          text="cards remaining"
        />
        <StudyComponent
          study={kanjiStudy}
          isUpdating={updating}
        />
      </MyStack>
    </SafeAreaView>
  );
}
