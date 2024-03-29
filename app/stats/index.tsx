import { H2 } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";

export default function Stats() {
  return (
    <SafeAreaView>
      <MyStack>
        <H2>Stats</H2>
      </MyStack>
    </SafeAreaView>
  );
}
