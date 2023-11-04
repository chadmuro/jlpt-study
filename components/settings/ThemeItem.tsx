import { withObservables } from "@nozbe/watermelondb/react";
import { ChevronRight, Palette } from "@tamagui/lucide-icons";
import { ListItem } from "tamagui";

import Settings from "../../model/Settings";

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

interface Props {
  settings: Settings;
}

function ThemeItem({ settings, ...props }: Props) {
  return (
    <ListItem
      hoverTheme
      pressTheme
      title="Theme"
      subTitle={settings.theme[0].toUpperCase() + settings.theme.slice(1)}
      icon={Palette}
      iconAfter={ChevronRight}
      {...props}
    />
  );
}

const EnhancedThemeItemComponent = enhance(ThemeItem);
export default EnhancedThemeItemComponent;
