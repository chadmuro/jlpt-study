import React, { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DatabaseProvider,
  useDatabase,
  withObservables
} from "@nozbe/watermelondb/react";
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

import { SettingsProvider, useSettings } from "../contexts/settingsContext";
import { StudyProvider, useStudy } from "../contexts/studyContext";
import SettingsModel from "../model/Settings";
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
            <SettingsProvider>
              <ThemeLayoutWrapper />
            </SettingsProvider>
          </StudyProvider>
        </DatabaseProvider>
      </Suspense>
    </TamaguiProvider>
  );
}

function ThemeLayoutWrapper() {
  const { settings, getSettings } = useSettings();
  const { getTodaysReview, getTodaysStudy } = useStudy();

  const database = useDatabase();

  useEffect(() => {
    async function initialLoad() {
      await getSettings();
      await getTodaysReview();
      await getTodaysStudy();

      if (!settings) {
        await database.write(async () => {
          await database.get<SettingsModel>("settings").create((setting) => {
            setting.userId = 1;
            setting.theme = "system";
            setting.notificationTime = null;
          });
        });
        await getSettings();
      }
      SplashScreen.hideAsync();
    }

    initialLoad();
  }, []);

  if (!settings) return null;

  return <EnhancedThemeLayoutComponent settings={settings} />;
}

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

function ThemeLayout({ settings }: { settings: SettingsModel }) {
  const colorScheme = useColorScheme();

  let theme = "light";
  if (settings.theme === "dark") {
    theme = "dark";
  } else if (settings.theme === "light") {
    theme = "light";
  } else if (settings.theme === "system") {
    theme = colorScheme;
  }

  return (
    <Theme name={theme === "dark" ? "dark" : "light"}>
      <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
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
        <StatusBar style={theme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    </Theme>
  );
}

const EnhancedThemeLayoutComponent = enhance(ThemeLayout);
