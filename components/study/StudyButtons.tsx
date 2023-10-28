import { Button, XStack } from "tamagui";

import { SuperMemoGrade } from "../../utils/supermemo";

interface Props {
  updateStudy: (grade: SuperMemoGrade) => Promise<void>;
  isUpdating: boolean;
}

export default function StudyButtons({ updateStudy, isUpdating }: Props) {
  return (
    <XStack justifyContent="space-between">
      <Button
        backgroundColor="$red10"
        onPress={() => updateStudy(0)}
        disabled={isUpdating}
        animation="bouncy"
        pressStyle={{ scale: 0.925, backgroundColor: "$red8" }}
      >
        Again
      </Button>
      <Button
        onPress={() => updateStudy(3)}
        disabled={isUpdating}
        animation="bouncy"
        pressStyle={{ scale: 0.925 }}
      >
        Hard
      </Button>
      <Button
        onPress={() => updateStudy(4)}
        disabled={isUpdating}
        animation="bouncy"
        pressStyle={{ scale: 0.925 }}
      >
        Good
      </Button>
      <Button
        backgroundColor="$green10"
        onPress={() => updateStudy(5)}
        disabled={isUpdating}
        animation="bouncy"
        pressStyle={{ scale: 0.925, backgroundColor: "$green8" }}
      >
        Easy
      </Button>
    </XStack>
  );
}
