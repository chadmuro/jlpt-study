import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";

import Settings from "../model/Settings";

type SettingsContextType = {
  settings: Settings | null;
  getSettings: () => Promise<void>;
  updateTheme: (value: "system" | "dark" | "light") => Promise<void>;
  updateFirstOpen: () => Promise<void>;
};

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

const SettingsProvider = ({ children }: PropsWithChildren<unknown>) => {
  const database = useDatabase();
  const [settings, setSettings] = useState<Settings | null>(null);

  async function getSettings() {
    const userSettings = await database
      .get<Settings>("settings")
      .query(Q.where("user_id", 1))
      .fetch();

    setSettings(userSettings[0]);
  }

  async function updateTheme(value: "system" | "dark" | "light") {
    if (settings) {
      await settings.updateSetting("theme", value);
    }
  }

  async function updateFirstOpen() {
    if (settings) {
      await settings.updateSetting("firstOpen", true);
    }
  }

  const value = {
    settings,
    getSettings,
    updateTheme,
    updateFirstOpen
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export { SettingsProvider, useSettings };
