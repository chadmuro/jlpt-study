import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { H2, Input, ListItem, Separator } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { grammar } from "../../data/grammar";

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
        <H2>Grammar</H2>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={handleSearch}
          placeholder="Search..."
          returnKeyType="done"
        />
        <FlatList
          data={searchGrammar}
          renderItem={({ item }) => (
            <Link
              href={`/grammar_list/${item.id}`}
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
