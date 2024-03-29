import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { H2, ListItem, Separator } from "tamagui";

import Search from "../../components/common/Search";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { vocabulary } from "../../data/vocabulary";
import { formatJapanese } from "../../utils/formatJapanese";

export default function Vocabulary() {
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
    <SafeAreaView>
      <MyStack>
        <H2>Vocabulary</H2>
        <Search
          search={search}
          handleSearch={handleSearch}
        />
        <FlatList
          data={searchVocabulary}
          renderItem={({ item }) => (
            <Link
              href={`/vocabulary_list/${item.id}`}
              asChild
            >
              <Pressable>
                <ListItem>{item.kanji}</ListItem>
              </Pressable>
            </Link>
          )}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      </MyStack>
    </SafeAreaView>
  );
}
