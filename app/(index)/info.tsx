import { H3, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Info() {
  return (
    <MyStack justifyContent="flex-start">
      <H3>Welcome to JLPT N2 Study</H3>
      <Text>
        Study over 2200 vocabulary words you will need to know to pass the JLPT
        N2 exam
      </Text>
      <Text>
        There are 20 new cards per day along with spaced repetition reviews
        following the supermemo algorithm
      </Text>
      <Text>Good luck with your study!</Text>
    </MyStack>
  );
}
