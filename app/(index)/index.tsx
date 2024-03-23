import { Info } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Button, H2, XStack } from "tamagui";

import BarGraph from "../../components/BarGraph";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useSettings } from "../../contexts/settingsContext";

export default function Home() {
  const { settings } = useSettings();
  const router = useRouter();

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  return (
    <SafeAreaView
      onLayout={() => {
        if (!settings.firstOpen) {
          router.push("/info");
        }
      }}
    >
      <MyStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>Today&apos;s Study</H2>
          <Link href="/info">
            <Info />
          </Link>
        </XStack>
        <Button onPress={() => handlePress("vocabulary")}>Vocabulary</Button>
        <Button onPress={() => handlePress("kanji")}>Kanji</Button>
        {/* <View
          position="absolute"
          bottom={20}
          left={5}
        >
          <BarGraph />
        </View> */}
      </MyStack>
    </SafeAreaView>
  );
}
