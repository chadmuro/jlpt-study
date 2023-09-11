import { Link } from "expo-router";
import { Button, H2, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";

export default function Home() {
  return (
    <SafeAreaView>
      <MyStack justifyContent="flex-start">
        <H2>Today&apos;s Cards</H2>
        <Text>20 new cards</Text>
        <Link
          asChild
          href="/study"
        >
          <Button>Start study</Button>
        </Link>

        <Text>15 review cards</Text>
        <Link
          asChild
          href="/review"
        >
          <Button>Start review</Button>
        </Link>
      </MyStack>
    </SafeAreaView>
  );
}
