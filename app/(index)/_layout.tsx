import { Stack } from "expo-router";

export default function Layout() {
  // TODO - on initial load show info

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="study" />
      <Stack.Screen name="review" />
      <Stack.Screen
        name="info"
        options={{
          presentation: "modal"
        }}
      />
    </Stack>
  );
}
