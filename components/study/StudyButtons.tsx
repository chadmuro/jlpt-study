import { Button, XStack } from "tamagui";

import { SuperMemoGrade } from "../../utils/supermemo";

interface Props {
  updateStudy: (grade: SuperMemoGrade) => Promise<void>;
}

export default function StudyButtons({ updateStudy }: Props) {
  return (
    <XStack justifyContent="space-between">
      <Button
        backgroundColor="$red10"
        onPress={() => updateStudy(0)}
      >
        Again
      </Button>
      <Button onPress={() => updateStudy(3)}>Hard</Button>
      <Button onPress={() => updateStudy(4)}>Good</Button>
      <Button
        backgroundColor="$green10"
        onPress={() => updateStudy(5)}
      >
        Easy
      </Button>
    </XStack>
  );
}
