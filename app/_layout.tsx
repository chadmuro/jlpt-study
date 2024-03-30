import React, { Suspense, useEffect, useState } from "react";
import { Appearance, AppState, ColorSchemeName } from "react-native";
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
import { Edit3, Search, Settings, TrendingUp } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { GrammarProvider, useGrammar } from "../contexts/grammarContext";
import { LogsProvider, useLogs } from "../contexts/logContext";
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
            <GrammarProvider>
              <SettingsProvider>
                <LogsProvider>
                  <ThemeLayoutWrapper />
                </LogsProvider>
              </SettingsProvider>
            </GrammarProvider>
          </StudyProvider>
        </DatabaseProvider>
      </Suspense>
    </TamaguiProvider>
  );
}

function ThemeLayoutWrapper() {
  const { settings, getSettings } = useSettings();
  const { getTodaysReview, getTodaysStudy } = useStudy();
  const { getTodaysGrammarReview, getTodaysGrammarStudy } = useGrammar();
  const { getLogs } = useLogs();

  const database = useDatabase();

  useEffect(() => {
    async function initialLoad() {
      await getSettings();
      await getTodaysReview();
      await getTodaysStudy();
      await getTodaysGrammarReview();
      await getTodaysGrammarStudy();
      await getLogs();

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
  const [currentTheme, setTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  useEffect(() => {
    const eventSubscription = AppState.addEventListener(
      "change",
      (nextAppState) => {
        if (nextAppState === "active") {
          const theme = Appearance.getColorScheme();
          setTheme(theme);
        }
      }
    );

    return () => {
      eventSubscription.remove();
    };
  }, []);

  let theme = "dark";

  if (settings.theme === "system") {
    theme = currentTheme ?? "dark";
  } else {
    theme = settings.theme;
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
                <Edit3 color={focused ? "red" : "$color"} />
              )
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: "Search",
              tabBarIcon: ({ focused }) => (
                <Search color={focused ? "red" : "$color"} />
              )
            }}
          />
          <Tabs.Screen
            name="stats"
            options={{
              href: null,
              title: "Stats",
              tabBarIcon: ({ focused }) => (
                <TrendingUp color={focused ? "red" : "$color"} />
              )
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIcon: ({ focused }) => (
                <Settings color={focused ? "red" : "$color"} />
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
