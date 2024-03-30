import { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { H2, H3, ScrollView, Text, View } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useLogs } from "../../contexts/logContext";
import { vocabulary } from "../../data/vocabulary";

export default function Stats() {
  const { logs, grammarLogs, getLogs } = useLogs();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await getLogs();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView>
      <MyStack>
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor="red"
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <H2>Stats</H2>
          <H3>Vocabulary</H3>
          <ScrollView height={200}>
            {logs.map((log) => (
              <View
                flexDirection="row"
                justifyContent="space-between"
                key={log[0]}
              >
                <Text>{vocabulary[log[0]].kanji}</Text>
                <Text>{log[1]}</Text>
              </View>
            ))}
          </ScrollView>
          <H3>Grammar</H3>
          <ScrollView height={200}>
            {grammarLogs.map((log) => (
              <View
                flexDirection="row"
                justifyContent="space-between"
                key={log[0]}
              >
                <Text>{vocabulary[log[0]].kanji}</Text>
                <Text>{log[1]}</Text>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </MyStack>
    </SafeAreaView>
  );
}
