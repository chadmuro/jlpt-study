import { Link, useGlobalSearchParams } from "expo-router";
import { Button, View, XStack } from "tamagui";

import TitleWithBack from "../../../components/common/TitleWIthBack";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import StudyCard from "../../../components/study/StudyCard";
import { vocabulary } from "../../../data/vocabulary";

export default function Details() {
  const { id } = useGlobalSearchParams();

  const cardData = vocabulary.find((vocab) => vocab.id === Number(id));

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Vocabulary" />
        {cardData && (
          <StudyCard
            cardData={cardData}
            showAnswer={true}
          />
        )}
        <XStack justifyContent="space-between">
          {Number(id) > 1 ? (
            <Link
              href={`/vocabulary_list/${Number(id) - 1}`}
              asChild
            >
              <Button>Prev</Button>
            </Link>
          ) : (
            <View />
          )}
          {Number(id) < vocabulary.length ? (
            <Link
              href={`/vocabulary_list/${Number(id) + 1}`}
              asChild
            >
              <Button>Next</Button>
            </Link>
          ) : (
            <View />
          )}
        </XStack>
      </MyStack>
    </SafeAreaView>
  );
}
