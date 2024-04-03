import { Link, useRouter } from "expo-router";
import { Button, H2, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";

export default function Search() {
  const router = useRouter();

  function handlePress(route: string) {
    router.push(`/${route}`);
  }

  return (
    <SafeAreaView>
      <MyStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>Search</H2>
        </XStack>
        <Button
          size="$6"
          onPress={() => handlePress("search/vocabulary_list")}
        >
          Vocabulary
        </Button>
        <Button
          size="$6"
          onPress={() => handlePress("search/grammar_list")}
        >
          Grammar
        </Button>
        <Button
          size="$6"
          onPress={() => handlePress("search/kanji_list")}
        >
          Kanji
        </Button>
      </MyStack>
    </SafeAreaView>
  );
}
