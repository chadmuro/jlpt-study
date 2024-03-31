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
  let text = "Vocabulary, Grammar, Kanji";
  if (settings.displayContent) {
    let words = settings.displayContent.split(",");
    words = words.map(
      (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    text = words.join(", ");
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
