import { Button, XStack } from "tamagui";

import { SuperMemoGrade } from "../../utils/supermemo";

interface Props {
  updateStudy: (grade: SuperMemoGrade) => Promise<void>;
  isMutating: boolean;
}

export default function StudyButtons({ updateStudy, isMutating }: Props) {
  return (
    <XStack justifyContent="space-between">
      <Button
        backgroundColor="$red10"
        onPress={() => updateStudy(0)}
        disabled={isMutating}
      >
        Again
      </Button>
      <Button
        onPress={() => updateStudy(3)}
        disabled={isMutating}
      >
        Hard
      </Button>
      <Button
        onPress={() => updateStudy(4)}
        disabled={isMutating}
      >
        Good
      </Button>
      <Button
        backgroundColor="$green10"
        onPress={() => updateStudy(5)}
        disabled={isMutating}
      >
        Easy
      </Button>
    </XStack>
  );
}
