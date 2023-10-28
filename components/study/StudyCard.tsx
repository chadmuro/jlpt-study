import { Card, H1, H2, Separator, View } from "tamagui";

import { formatJapanese } from "../../utils/formatJapanese";

interface Props {
  cardData: {
    id: number;
    kanji: string;
    japanese: string;
    english: string;
  };
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StudyCard({
  cardData,
  showAnswer,
  setShowAnswer
}: Props) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      width="100%"
      height={300}
      alignItems="center"
      onPress={() => setShowAnswer(!showAnswer)}
    >
      <Card.Header
        padded
        justifyContent="flex-start"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <H1>{cardData.kanji}</H1>
        <Separator
          alignSelf="stretch"
          marginVertical={15}
        />
        {showAnswer && (
          <View
            enterStyle={{
              opacity: 0,
              y: 10,
              scale: 0.9
            }}
            animation="bouncy"
          >
            <H2>{formatJapanese(cardData.japanese)}</H2>
            <H2>{cardData.english}</H2>
          </View>
        )}
      </Card.Header>
    </Card>
  );
}
