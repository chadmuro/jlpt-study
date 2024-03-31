import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { Checkbox, Label, Text, XStack, YStack } from "tamagui";

import { useSettings } from "../../contexts/settingsContext";
import Settings from "../../model/Settings";

const enhance = withObservables(["settings"], ({ settings }) => ({
  settings
}));

interface Props {
  settings: Settings;
}

type Content = "vocabulary" | "grammar" | "kanji";

function DisplayContent({ settings }: Props) {
  const { updateDisplayContent } = useSettings();
  const checkedItems = settings.displayContent
    ? settings.displayContent.split(",")
    : ["vocabulary", "grammar", "kanji"];
  const [showError, setShowError] = useState(false);

  function onCheckedChange(value: Content, checked: boolean) {
    if (!checked) {
      if (checkedItems.length === 1) {
        setShowError(true);
        return;
      }
      const items = checkedItems.filter((item) => item !== value);
      updateDisplayContent(items.join(","));
    } else {
      setShowError(false);
      const items = [...checkedItems, value];
      updateDisplayContent(items.join(","));
    }
  }

  return (
    <YStack>
      <XStack
        width={300}
        alignItems="center"
        space="$4"
      >
        <Checkbox
          id="vocabulary"
          size="$4"
          checked={!!checkedItems.find((item) => item === "vocabulary")}
          onCheckedChange={(checked: boolean) =>
            onCheckedChange("vocabulary", checked)
          }
        >
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox>

        <Label
          size="$4"
          htmlFor="vocabulary"
        >
          Vocabulary
        </Label>
      </XStack>
      <XStack
        width={300}
        alignItems="center"
        space="$4"
      >
        <Checkbox
          id="grammar"
          size="$4"
          checked={!!checkedItems.find((item) => item === "grammar")}
          onCheckedChange={(checked: boolean) =>
            onCheckedChange("grammar", checked)
          }
        >
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox>

        <Label
          size="$4"
          htmlFor="grammar"
        >
          Grammar
        </Label>
      </XStack>
      <XStack
        width={300}
        alignItems="center"
        space="$4"
      >
        <Checkbox
          id="kanji"
          size="$4"
          checked={!!checkedItems.find((item) => item === "kanji")}
          onCheckedChange={(checked: boolean) =>
            onCheckedChange("kanji", checked)
          }
        >
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox>

        <Label
          size="$4"
          htmlFor="kanji"
        >
          Kanji
        </Label>
      </XStack>
      {showError && (
        <Text color="$red10">At least one content must be selected</Text>
      )}
    </YStack>
  );
}

const EnhancedDisplayContentComponent = enhance(DisplayContent);
export default EnhancedDisplayContentComponent;
