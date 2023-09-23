import { useState } from "react";
import { Info, X } from "@tamagui/lucide-icons";
import { Link, router, useNavigation } from "expo-router";
import {
  Button,
  Dialog,
  H2,
  H3,
  Separator,
  Spinner,
  Text,
  Unspaced,
  XStack,
  YStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import StudyCard from "../../components/study/StudyCard";
import { useSession } from "../../contexts/sessionContext";
import { useStudy } from "../../contexts/studyContext";
import { useVocabulary } from "../../contexts/vocabularyContext";
import { useReview } from "../../hooks/useReview";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const { vocabulary } = useVocabulary();
  const { session } = useSession();
  const navigation = useNavigation();
  const { todaysStudyCards } = useStudy();
  const { data } = useReview();

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
        <XStack
          alignItems="center"
          justifyContent="space-between"
        >
          <H2>Today&apos;s Cards</H2>
          <Link href="/info">
            <Info />
          </Link>
        </XStack>
        <YStack gap="$2">
          <Text>{todaysStudyCards.length ?? 0} new cards</Text>
          <Button onPress={() => handlePress("study")}>Start study</Button>
        </YStack>
        <YStack gap="$2">
          <Text>{data?.length ?? 0} review cards</Text>
          <Button onPress={() => handlePress("review")}>Start review</Button>
        </YStack>
        <Separator marginVertical={15} />
        <YStack gap="$2">
          <H3>Word of the day</H3>
          {vocabulary ? (
            <StudyCard
              cardData={vocabulary[2237]}
              showAnswer={showAnswer}
              setShowAnswer={setShowAnswer}
            />
          ) : (
            <Spinner
              size="large"
              color="$red10"
            />
          )}
        </YStack>
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
