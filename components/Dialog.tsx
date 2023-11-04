import React from "react";
import { Adapt, Button, Dialog, Sheet, YStack } from "tamagui";

interface Props {
  trigger: React.JSX.Element;
  content: React.JSX.Element;
  title: string;
  description: string;
}

export default function SettingsDialog({
  trigger,
  content,
  title,
  description
}: Props) {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Frame
            padding="$4"
            space
          >
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
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
          space
        >
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          {content}
          {/* <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              defaultValue="Nate Wienert"
            />
          </Fieldset> */}

          <YStack marginTop="$2">
            <Dialog.Close
              displayWhenAdapted
              asChild
            >
              <Button aria-label="Close">Close</Button>
            </Dialog.Close>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
