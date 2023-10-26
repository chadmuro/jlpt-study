import { Card, H1, H2 } from "tamagui";

import { formatJapanese } from "../../utils/formatJapanese";

interface Props {
  hiddenText: boolean;
  flipCard: () => void;
  isFront: boolean;
  cardData: {
    id: number;
    kanji: string;
    japanese: string;
    english: string;
  };
}

export function StudyCardDetails({
  hiddenText,
  flipCard,
  isFront,
  cardData
}: Props) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      width="100%"
      height={300}
      alignItems="center"
      onPress={flipCard}
    >
      {!hiddenText && (
        <Card.Header
          padded
          justifyContent="center"
          height="100%"
        >
          {isFront ? (
            <H1>{cardData.kanji}</H1>
          ) : (
            <>
              <H2>{formatJapanese(cardData.japanese)}</H2>
              <H2>{cardData.english}</H2>
            </>
          )}
        </Card.Header>
      )}
    </Card>
  );
}
