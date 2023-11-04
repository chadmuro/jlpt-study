import {
  AlarmClock,
  ChevronRight,
  ClipboardCopy,
  Mail,
  Palette,
  Pencil,
  X
} from "@tamagui/lucide-icons";
import { H2, ListItem, Separator, YGroup } from "tamagui";

import SettingsDialog from "../../components/Dialog";
import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import ThemeContent from "../../components/settings/ThemeContent";
import ThemeItem from "../../components/settings/ThemeItem";
import { useSettings } from "../../contexts/settingsContext";

export default function Settings() {
  const { settings } = useSettings();

  return (
    <SafeAreaView>
      <MyStack justifyContent="flex-start">
        <H2>Settings</H2>
        <YGroup
          alignSelf="center"
          bordered
          size="$5"
          separator={<Separator />}
        >
          <YGroup.Item>
            <SettingsDialog
              trigger={<ThemeItem settings={settings} />}
              content={<ThemeContent settings={settings} />}
              title="Theme"
              description="System, dark, or light mode"
            />
          </YGroup.Item>

          {/* <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Reminder"
              subTitle="Not set"
              icon={AlarmClock}
              iconAfter={ChevronRight}
            />
          </YGroup.Item> */}
        </YGroup>
        <YGroup
          alignSelf="center"
          bordered
          size="$5"
          separator={<Separator />}
        >
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Open default mail app"
              icon={Mail}
              iconAfter={ChevronRight}
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Copy email to clipboard"
              icon={ClipboardCopy}
              iconAfter={ChevronRight}
            />
          </YGroup.Item>
          {/* <YGroup.Item>
            <ListItem
              hoverTheme
              pressTheme
              title="Write a review"
              icon={Pencil}
              iconAfter={ChevronRight}
            />
          </YGroup.Item> */}
        </YGroup>
      </MyStack>
    </SafeAreaView>
  );
}