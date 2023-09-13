import { useState } from "react";
import { X } from "@tamagui/lucide-icons";
import { router, useNavigation } from "expo-router";
import { Button, Dialog, H2, Text, Unspaced, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useSession } from "../../contexts/sessionContext";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { session } = useSession();
  const navigation = useNavigation();

  function handlePress(route: string) {
    if (!session) {
      setOpen(true);
    } else {
      router.push(`/${route}`);
    }
  }

  return (
    <SafeAreaView>
      <MyStack justifyContent="flex-start">
        <H2>Today&apos;s Cards</H2>
        <Text>20 new cards</Text>
        <Button onPress={() => handlePress("study")}>Start study</Button>

        <Text>15 review cards</Text>

        <Button onPress={() => handlePress("review")}>Start review</Button>
      </MyStack>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        modal={true}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
            onPress={() => setOpen(false)}
          />
          <Dialog.Content
            bordered
            elevate
            key="content"
            animateOnly={["transform", "opacity"]}
            animation={[
              "quick",
              {
                opacity: {
                  overshootClamping: true
                }
              }
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <Dialog.Title>Login required</Dialog.Title>
            <Dialog.Description>
              You must login to keep track of your study and review cards.
            </Dialog.Description>
            <XStack gap="$4">
              <Dialog.Close
                displayWhenAdapted
                asChild
              >
                <Button
                  themeInverse
                  aria-label="Close"
                >
                  Cancel
                </Button>
              </Dialog.Close>
              <Button
                onPress={() => {
                  navigation.navigate("account" as never);
                  setOpen(false);
                }}
              >
                Go to login
              </Button>
            </XStack>
            <Unspaced>
              <Dialog.Close asChild>
                <Button
                  position="absolute"
                  top="$3"
                  right="$3"
                  size="$2"
                  circular
                  icon={X}
                />
              </Dialog.Close>
            </Unspaced>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </SafeAreaView>
  );
}
