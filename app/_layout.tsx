import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Edit3, List, User } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { SessionProvider } from "../contexts/sessionContext";
import { VocabularyProvider } from "../contexts/vocabularyContext";
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
            <SessionProvider>
              <VocabularyProvider>
                <Tabs
                  screenOptions={{
                    headerShown: false
                  }}
                >
                  <Tabs.Screen
                    name="(index)"
                    options={{
                      title: "Study",
                      tabBarIcon: ({ focused }) => (
                        <Edit3 color={focused ? "red" : "white"} />
                      ),
                      tabBarActiveTintColor: "red"
                    }}
                  />
                  <Tabs.Screen
                    name="vocabulary"
                    options={{
                      title: "Vocabulary",
                      tabBarIcon: ({ focused }) => (
                        <List color={focused ? "red" : "white"} />
                      ),
                      tabBarActiveTintColor: "red"
                    }}
                  />
                  <Tabs.Screen
                    name="account"
                    options={{
                      title: "Account",
                      tabBarIcon: ({ focused }) => (
                        <User color={focused ? "red" : "white"} />
                      ),
                      tabBarActiveTintColor: "red"
                    }}
                  />
                </Tabs>
              </VocabularyProvider>
            </SessionProvider>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
