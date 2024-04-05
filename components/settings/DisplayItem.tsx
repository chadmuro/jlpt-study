import { withObservables } from "@nozbe/watermelondb/react";
import { ChevronRight, EyeOff } from "@tamagui/lucide-icons";
import { ListItem } from "tamagui";

import Settings from "../../model/Settings";

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

interface Props {
  settings: Settings;
}

function DisplayItem({ settings, ...props }: Props) {
  let text = "Vocabulary Grammar Kanji";
  if (settings.displayContent) {
    const words = settings.displayContent.split(",");
    if (words.length === 3) {
      text = "Vocabulary Grammar  Kanji";
    } else if (words.length === 1) {
      text = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    } else {
      let displayText = "";
      if (words.includes("vocabulary")) {
        displayText = "Vocabulary ";
      }
      if (words.includes("grammar")) {
        displayText = displayText + "Grammar ";
      }
      if (words.includes("kanji")) {
        displayText = displayText + "Kanji";
      }
      text = displayText;
    }
  }

  return (
    <ListItem
      hoverTheme
      pressTheme
      title="Display study"
      subTitle={text}
      icon={EyeOff}
      iconAfter={ChevronRight}
      {...props}
    />
  );
}

const EnhancedDisplayItemComponent = enhance(DisplayItem);
export default EnhancedDisplayItemComponent;
