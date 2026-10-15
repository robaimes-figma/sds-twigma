import { IconArrowDown, IconArrowUp, IconInfo, IconMenu } from "icons";
import { Flex } from "layout";
import {
  Button,
  ButtonGroup,
  DialogBody,
  DialogButton,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  IconButton,
  InputField,
  Notification,
  Text,
  TextSmall,
  TextStrong,
  Tooltip,
} from "primitives";
import { DemoCard, GroupSection } from "../kit";

export function Overlays() {
  return (
    <GroupSection
      id="overlays"
      title="Overlays & feedback"
      description="Dialogs, tooltips, and notifications that surface on top of content."
    >
      <DemoCard title="Dialog">
        <DialogButton variant="primary" icon={<IconMenu />} label="Open Dialog">
          {({ close }) => (
            <>
              <DialogClose onPress={close} />
              <DialogTitle>Issue a refund</DialogTitle>
              <DialogDescription>
                The refund will be reflected in the customer's bank account 2 to
                3 business days after processing.
              </DialogDescription>
              <DialogBody>
                <InputField label="Amount" name="amount" placeholder="$0.00" />
              </DialogBody>
              <ButtonGroup>
                <Button onPress={close}>Refund</Button>
                <Button variant="subtle" onPress={close}>
                  Cancel
                </Button>
              </ButtonGroup>
            </>
          )}
        </DialogButton>
      </DemoCard>

      <DemoCard title="Tooltip">
        <Flex gap="300" alignPrimary="center">
          <DialogTrigger>
            <IconButton aria-label="Up">
              <IconArrowUp />
            </IconButton>
            <Tooltip placement="top">
              <TextStrong>Move up</TextStrong>
              <TextSmall>Promote this item in the list.</TextSmall>
            </Tooltip>
          </DialogTrigger>
          <DialogTrigger>
            <IconButton aria-label="Down">
              <IconArrowDown />
            </IconButton>
            <Tooltip placement="bottom">
              <TextStrong>Move down</TextStrong>
              <TextSmall>Demote this item in the list.</TextSmall>
            </Tooltip>
          </DialogTrigger>
        </Flex>
      </DemoCard>

      <DemoCard title="Notification — message" wide>
        <Notification isDismissible variant="message" icon={<IconInfo size="20" />}>
          <TextStrong>Heads up</TextStrong>
          <Text>Your changes have been saved as a new version.</Text>
          <Button size="small">View</Button>
        </Notification>
      </DemoCard>

      <DemoCard title="Notification — alert" wide>
        <Notification isDismissible variant="alert" icon={<IconInfo size="20" />}>
          <TextStrong>Payment failed</TextStrong>
          <Text>We couldn't process your card. Please try again.</Text>
        </Notification>
      </DemoCard>
    </GroupSection>
  );
}
