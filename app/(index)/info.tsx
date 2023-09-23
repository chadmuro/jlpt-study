import { Text } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Info() {
  return (
    <MyStack justifyContent="flex-start">
      <Text>
        Over 2200 vocabulary words you will need to know to pass the JLPT N2
        exam
      </Text>
      <Text>Study 20 new cards per day following the supermemo algorithm</Text>
    </MyStack>
  );
}
