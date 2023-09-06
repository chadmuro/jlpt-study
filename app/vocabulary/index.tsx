import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Button, H3, H6, ListItem, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { testData } from "../../testData";

export default function Vocabulary() {
  const router = useRouter();

  return (
    <MyStack justifyContent="flex-start">
      <FlatList
        data={testData}
        renderItem={({ item }) => <ListItem>{item.kanji}</ListItem>}
        keyExtractor={(item) => String(item.id)}
      />
    </MyStack>
  );
}
