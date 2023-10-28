import { Link } from "expo-router";
import { Button, H4, Text, YStack } from "tamagui";

interface Props {
  text: string;
  link: string;
  buttonText: string;
}

export default function Completed({ text, link, buttonText }: Props) {
  return (
    <YStack gap={10}>
      <H4>Great job 💪</H4>
      <Text>{text}</Text>
      <Link
        href={link}
        asChild
      >
        <Button>{buttonText}</Button>
      </Link>
    </YStack>
  );
}
