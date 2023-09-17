import { Button, XStack } from "tamagui";

export default function StudyButtons() {
  return (
    <XStack justifyContent="space-between">
      <Button backgroundColor="$red10">Again</Button>
      <Button>Hard</Button>
      <Button>Good</Button>
      <Button backgroundColor="$green10">Easy</Button>
    </XStack>
  );
}
