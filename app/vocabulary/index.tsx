import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { H2, Input, ListItem, Separator } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import { useVocabulary } from "../../contexts/vocabularyContext";
import { formatJapanese } from "../../utils/formatJapanese";

export default function Vocabulary() {
  const { vocabulary } = useVocabulary();
  const [searchVocabulary, setSearchVocabulary] = useState(vocabulary);
  const [search, setSearch] = useState("");

  function handleSearch(text: string) {
    setSearch(text);

    const filteredVocabulary = vocabulary.filter((vocab) => {
      const searchParam = `${vocab.kanji} ${formatJapanese(vocab.japanese)} ${
        vocab.english
      }`;
      return searchParam.includes(text);
    });

    setSearchVocabulary(filteredVocabulary);
  }

  return (
    <MySafeAreaView>
      <MyStack justifyContent="flex-start">
        <H2>Vocabulary</H2>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={handleSearch}
          placeholder="Search..."
          returnKeyType="done"
        />
        <FlatList
          data={searchVocabulary}
          renderItem={({ item }) => (
            <Link
              href={`/vocabulary/${item.id}`}
              asChild
            >
              <Pressable>
                <ListItem>{item.kanji}</ListItem>
              </Pressable>
            </Link>
          )}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
          showsVerticalScrollIndicator={false}
        />
      </MyStack>
    </MySafeAreaView>
  );
}
