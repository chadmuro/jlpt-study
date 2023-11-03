import React, { Suspense } from "react";
import { useColorScheme } from "react-native";
import { DatabaseProvider, useDatabase } from "@nozbe/watermelondb/react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Edit3, List, Settings } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { StudyProvider } from "../contexts/studyContext";
import config from "../tamagui.config";
import databaseProvider from "../utils/database";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <DatabaseProvider database={databaseProvider}>
          <StudyProvider>
            <ThemeLayout />
          </StudyProvider>
        </DatabaseProvider>
      </Suspense>
    </TamaguiProvider>
  );
}

function ThemeLayout() {
  const database = useDatabase();
  const colorScheme = useColorScheme();

  return (
    <Theme name="dark">
      <ThemeProvider value={DarkTheme}>
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
                <Edit3 color={focused ? "red" : "$red5"} />
              )
            }}
          />
          <Tabs.Screen
            name="vocabulary"
            options={{
              title: "Vocabulary",
              tabBarIcon: ({ focused }) => (
                <List color={focused ? "red" : "$red5"} />
              )
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              // href: null,
              title: "Settings",
              tabBarIcon: ({ focused }) => (
                <Settings color={focused ? "red" : "$red5"} />
              )
            }}
          />
        </Tabs>
        <StatusBar style="light" />
      </ThemeProvider>
    </Theme>
  );
}
