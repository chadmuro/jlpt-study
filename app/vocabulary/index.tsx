import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Button, H3, H6, ListItem, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";

const testData = [
  {
    id: 1,
    kanji: "相変わらず",
    japanese: "相[あい] 変[か]わらず",
    english: "as before/usual"
  },
  {
    id: 2,
    kanji: "相次いで",
    japanese: "相[あい] 次[つ]いで",
    english: "one after the other"
  },
  {
    id: 3,
    kanji: "～相手",
    japanese: "～ 相[あい] 手[て]",
    english: "~ partner"
  },
  {
    id: 4,
    kanji: "アイデア",
    japanese: "アイデア",
    english: "idea"
  },
  {
    id: 5,
    kanji: "あいにく",
    japanese: "あいにく",
    english: "unfortunately"
  }
];

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
