import { Card, H1, H2 } from "tamagui";

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
      animation="bouncy"
      scale={0.9}
      alignItems="center"
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      onPressOut={() => setShowAnswer(!showAnswer)}
    >
      <Card.Header
        padded
        justifyContent="center"
        height="100%"
      >
        {showAnswer ? (
          <>
            <H2>{formatJapanese(cardData.japanese)}</H2>
            <H2>{cardData.english}</H2>
          </>
        ) : (
          <H1>{cardData.kanji}</H1>
        )}
      </Card.Header>
    </Card>
  );
}
