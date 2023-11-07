import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
  onLayout?: () => void;
}

export function SafeAreaView({ children, onLayout }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top, flex: 1 }}
      onLayout={onLayout}
    >
      {children}
    </View>
  );
}
