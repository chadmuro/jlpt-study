import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { ListItem, Separator } from "tamagui";

import TitleWithBack from "../../../components/common/BackButtonTitle";
import Search from "../../../components/common/Search";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { kanji } from "../../../data/kanji";

export default function KanjiList() {
  const [searchKanji, setSearchKanji] = useState(kanji);
  const [search, setSearch] = useState("");

  function handleSearch(text: string) {
    setSearch(text);

    const filteredKanji = kanji.filter((kan) => {
      const searchParam = `${kan.kanji} ${kan.english} ${kan.onyomi} ${kan.kunyomi}`;
      return searchParam.includes(text);
    });

    setSearchKanji(filteredKanji);
  }

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Kanji" />
        <Search
          search={search}
          handleSearch={handleSearch}
        />
        <FlatList
          data={searchKanji}
          renderItem={({ item }) => (
            <Link
              href={`/search/kanji_list/${item.id}`}
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
