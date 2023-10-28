import { H2, Separator, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Info() {
  return (
    <MyStack justifyContent="flex-start">
      <H2 textAlign="center">Welcome to JLPT N2 Study 🇯🇵</H2>
      <Separator
        alignSelf="stretch"
        marginVertical={10}
      />
      <Text fontSize={16}>
        Vocabulary list includes over 2200 words that you will need to know to
        pass the JLPT N2 exam.
      </Text>
      <Text fontSize={16}>
        You will study 20 new cards per day along with review cards.
      </Text>
      <Text fontSize={16}>
        This application uses the supermemo spaced repetition algorithm.
      </Text>
      <Text fontSize={16}>Good luck with your study!</Text>
    </MyStack>
  );
}
