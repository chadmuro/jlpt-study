import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack } from "tamagui";

interface Props {
  title: string;
}

export default function TitleWithBack({ title }: Props) {
  const router = useRouter();

  return (
    <XStack
      alignItems="center"
      space="$2"
    >
      <Button
        icon={ArrowLeft}
        onPress={router.back}
      />
      <H3>{title}</H3>
    </XStack>
  );
}
