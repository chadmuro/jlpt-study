import { View as RNView } from "react-native";
import { Card, H1, H3, H6, ScrollView, Separator, View, YStack } from "tamagui";

import { Kanji } from "../../types";

interface Props {
  cardData: Kanji;
  showAnswer: boolean;
  setShowAnswer?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function KanjiCard({
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
      flex={1}
      alignItems="center"
      onPress={() => (setShowAnswer ? setShowAnswer(!showAnswer) : null)}
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
          <ScrollView width="100%">
            <RNView onStartShouldSetResponder={() => true}>
              <View
                enterStyle={{
                  opacity: 0,
                  y: 10,
                  scale: 0.9
                }}
                animation="bouncy"
              >
                <YStack space>
                  <YStack>
                    <H3>Onyomi</H3>
                    <H6>{cardData.onyomi}</H6>
                  </YStack>
                  <YStack>
                    <H3>Kunyomi</H3>
                    <H6>{cardData.kunyomi}</H6>
                  </YStack>
                  <YStack>
                    <H3>English</H3>
                    <H6>{cardData.english}</H6>
                  </YStack>
                  <YStack>
                    <H3>Example</H3>
                    <H6>{cardData.example}</H6>
                  </YStack>
                </YStack>
              </View>
            </RNView>
          </ScrollView>
        )}
      </Card.Header>
    </Card>
  );
}
