import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { ListItem, Separator } from "tamagui";

import Search from "../../../components/common/Search";
import TitleWithBack from "../../../components/common/TitleWIthBack";
import { MyStack } from "../../../components/MyStack";
import { SafeAreaView } from "../../../components/SafeAreaView";
import { grammar } from "../../../data/grammar";

export default function GrammarList() {
  const [searchGrammar, setSearchGrammar] = useState(grammar);
  const [search, setSearch] = useState("");

  function handleSearch(text: string) {
    setSearch(text);

    const filteredGrammar = grammar.filter((gram) => {
      const searchParam = `${gram.grammar} ${gram.english}`;
      return searchParam.includes(text);
    });

    setSearchGrammar(filteredGrammar);
  }

  return (
    <SafeAreaView>
      <MyStack>
        <TitleWithBack title="Grammar" />
        <Search
          search={search}
          handleSearch={handleSearch}
        />
        <FlatList
          data={searchGrammar}
          renderItem={({ item }) => (
            <Link
              href={`/search/grammar_list/${item.id}`}
              asChild
            >
              <Pressable>
                <ListItem>{item.grammar}</ListItem>
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
