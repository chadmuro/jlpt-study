import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name="dark">
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            {/* <MySafeAreaView> */}
            <Tabs>
              <Tabs.Screen name="index" />
              <Tabs.Screen name="account" />
              <Tabs.Screen
                // Name of the route to hide.
                name="users/[user]"
                options={{
                  // This tab will no longer show up in the tab bar.
                  href: null
                }}
              />
            </Tabs>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
