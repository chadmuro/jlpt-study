import { withObservables } from "@nozbe/watermelondb/react";
import { Label, RadioGroup, XStack } from "tamagui";

import { useSettings } from "../../contexts/settingsContext";
import Settings from "../../model/Settings";

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

interface Props {
  settings: Settings;
}

function ThemeContent({ settings }: Props) {
  const { updateTheme } = useSettings();

  function onThemeChange(value: "system" | "dark" | "light") {
    updateTheme(value);
  }

  return (
    <XStack>
      <RadioGroup
        value={settings?.theme}
        space="$4"
        accentColor="$red10"
        onValueChange={onThemeChange}
      >
        <XStack
          width={300}
          alignItems="center"
          space="$4"
        >
          <RadioGroup.Item
            value="system"
            id="system"
          >
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label htmlFor="system">System</Label>
        </XStack>
        <XStack
          width={300}
          alignItems="center"
          space="$4"
        >
          <RadioGroup.Item
            value="dark"
            id="dark"
          >
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label htmlFor="dark">Dark</Label>
        </XStack>
        <XStack
          width={300}
          alignItems="center"
          space="$4"
        >
          <RadioGroup.Item
            value="light"
            id="light"
          >
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label htmlFor="light">Light</Label>
        </XStack>
      </RadioGroup>
    </XStack>
  );
}

const EnhancedThemeContentComponent = enhance(ThemeContent);
export default EnhancedThemeContentComponent;
