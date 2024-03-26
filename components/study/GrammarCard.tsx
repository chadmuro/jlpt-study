import { View as RNView } from "react-native";
import {
  Card,
  H3,
  H5,
  Paragraph,
  ScrollView,
  Separator,
  View,
  YStack
} from "tamagui";

import { Grammar } from "../../types";

interface Props {
  cardData: Grammar;
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GrammarCard({
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
      onPress={() => setShowAnswer(!showAnswer)}
    >
      <Card.Header
        padded
        justifyContent="flex-start"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <H3>{cardData.grammar}</H3>
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
                    <H5>English</H5>
                    <Paragraph>{cardData.english}</Paragraph>
                  </YStack>
                  <YStack>
                    <H5>Background</H5>
                    <Paragraph>{cardData.background}</Paragraph>
                  </YStack>
                  <YStack>
                    <H5>Conjunction</H5>
                    <Paragraph>{cardData.conjunction}</Paragraph>
                  </YStack>
                  <YStack>
                    <H5>Example</H5>
                    <Paragraph>{cardData.sentence}</Paragraph>
                  </YStack>
                  <YStack>
                    <H5>Translation</H5>
                    <Paragraph>{cardData.sentence_english}</Paragraph>
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
