import { Pressable } from "react-native";
import { X } from "@tamagui/lucide-icons";
import { Input, View } from "tamagui";

interface Props {
  search: string;
  handleSearch: (text: string) => void;
}

export default function Search({ search, handleSearch }: Props) {
  return (
    <View position="relative">
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={handleSearch}
        placeholder="Search..."
        returnKeyType="done"
        paddingRight="$7"
      />
      {search !== "" && (
        <Pressable
          onPress={() => handleSearch("")}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <X color="white" />
        </Pressable>
      )}
    </View>
  );
}
