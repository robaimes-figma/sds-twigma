import { IconActivity, IconArrowLeft } from "icons";
import { Flex } from "layout";
import {
  Button,
  ButtonDanger,
  ButtonGroup,
  DestructiveIconButton,
  IconButton,
  Link,
} from "primitives";
import { DemoCard, GroupSection } from "../kit";

export function Actions() {
  return (
    <GroupSection
      id="actions"
      title="Actions"
      description="Buttons, icon buttons, and links for triggering actions."
    >
      <DemoCard title="Button — variants">
        <Flex gap="300" alignSecondary="center" wrap>
          <Button variant="primary">Primary</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="subtle">Subtle</Button>
        </Flex>
      </DemoCard>

      <DemoCard title="Button — with icons & sizes">
        <Flex gap="300" alignSecondary="center" wrap>
          <Button size="small">
            <IconArrowLeft />
            Small
          </Button>
          <Button size="medium">
            Medium
            <IconActivity />
          </Button>
          <Button isDisabled>Disabled</Button>
        </Flex>
      </DemoCard>

      <DemoCard title="Button Danger">
        <Flex gap="300" alignSecondary="center" wrap>
          <ButtonDanger variant="danger-primary">Delete</ButtonDanger>
          <ButtonDanger variant="danger-subtle">Delete</ButtonDanger>
        </Flex>
      </DemoCard>

      <DemoCard title="Button Group">
        <ButtonGroup align="center" style={{ width: 280 }}>
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </ButtonGroup>
      </DemoCard>

      <DemoCard title="Icon Button">
        <Flex gap="300" alignSecondary="center" wrap>
          <IconButton variant="primary" aria-label="Activity">
            <IconActivity />
          </IconButton>
          <IconButton variant="neutral" aria-label="Activity">
            <IconActivity />
          </IconButton>
          <IconButton variant="subtle" aria-label="Activity">
            <IconActivity />
          </IconButton>
          <DestructiveIconButton
            variant="danger-primary"
            aria-label="Delete"
          >
            <IconActivity />
          </DestructiveIconButton>
        </Flex>
      </DemoCard>

      <DemoCard title="Link">
        <Link href="https://www.figma.com">Visit Figma</Link>
      </DemoCard>
    </GroupSection>
  );
}
