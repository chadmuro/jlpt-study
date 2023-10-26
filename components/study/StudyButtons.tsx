import { Button, XStack } from "tamagui";

import { SuperMemoGrade } from "../../utils/supermemo";

interface Props {
  updateStudy: (grade: SuperMemoGrade) => Promise<void>;
  isUpdating: boolean;
}

export default function StudyButtons({ updateStudy, isUpdating }: Props) {
  return (
    <XStack
      justifyContent="space-between"
      marginTop={300}
    >
      <Button
        backgroundColor="$red10"
        onPress={() => updateStudy(0)}
        disabled={isUpdating}
      >
        Again
      </Button>
      <Button
        onPress={() => updateStudy(3)}
        disabled={isUpdating}
      >
        Hard
      </Button>
      <Button
        onPress={() => updateStudy(4)}
        disabled={isUpdating}
      >
        Good
      </Button>
      <Button
        backgroundColor="$green10"
        onPress={() => updateStudy(5)}
        disabled={isUpdating}
      >
        Easy
      </Button>
    </XStack>
  );
}
