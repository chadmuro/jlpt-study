import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";

import { useStudy } from "../../contexts/studyContext";

export default function Layout() {
  const { loading } = useStudy();

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

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
