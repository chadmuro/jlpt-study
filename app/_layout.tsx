import React, { Suspense } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Edit3, List } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { DatabaseProvider } from "../contexts/databaseContext";
import { StudyProvider } from "../contexts/studyContext";
import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name="dark">
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <DatabaseProvider>
              <StudyProvider>
                <Tabs
                  screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "red"
                  }}
                >
                  <Tabs.Screen
                    name="(index)"
                    options={{
                      title: "Study",
                      tabBarIcon: ({ focused }) => (
                        <Edit3 color={focused ? "red" : "white"} />
                      )
                    }}
                  />
                  <Tabs.Screen
                    name="vocabulary"
                    options={{
                      title: "Vocabulary",
                      tabBarIcon: ({ focused }) => (
                        <List color={focused ? "red" : "white"} />
                      )
                    }}
                  />
                </Tabs>
              </StudyProvider>
            </DatabaseProvider>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
