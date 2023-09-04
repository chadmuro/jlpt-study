import { Link } from "expo-router";
import { Button, H2, Text } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";

export default function Home() {
  return (
    <MySafeAreaView>
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
    </MySafeAreaView>
  );
}
