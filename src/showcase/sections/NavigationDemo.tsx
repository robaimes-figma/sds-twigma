import { IconMenu, IconStar } from "icons";
import {
  MenuButton,
  MenuDescription,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
  Navigation,
  NavigationButton,
  NavigationPill,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "primitives";
import { useState } from "react";
import { DemoCard, GroupSection } from "../kit";

function NavButtons() {
  const [current, setCurrent] = useState(1);
  return (
    <Navigation>
      {[1, 2, 3].map((n) => (
        <NavigationButton
          key={n}
          icon={<IconStar size="24" />}
          direction="column"
          isSelected={current === n}
          onPress={() => setCurrent(n)}
        >
          Item {n}
        </NavigationButton>
      ))}
    </Navigation>
  );
}

function NavPills() {
  const [current, setCurrent] = useState(1);
  return (
    <Navigation>
      {[1, 2, 3].map((n) => (
        <NavigationPill
          key={n}
          isSelected={current === n}
          onPress={() => setCurrent(n)}
        >
          Item {n}
        </NavigationPill>
      ))}
    </Navigation>
  );
}

export function NavigationDemo() {
  return (
    <GroupSection
      id="navigation"
      title="Navigation"
      description="Tabs, navigation bars, and menus for moving around an app."
    >
      <DemoCard title="Tabs" wide>
        <Tabs
          aria-label="Example tabs"
          defaultSelectedKey="overview"
          style={{ width: "100%" }}
        >
          <TabList>
            <Tab id="overview">Overview</Tab>
            <Tab id="activity">Activity</Tab>
            <Tab id="settings">Settings</Tab>
          </TabList>
          <TabPanel id="overview">A summary of everything at a glance.</TabPanel>
          <TabPanel id="activity">Your recent activity shows up here.</TabPanel>
          <TabPanel id="settings">Tune preferences and options here.</TabPanel>
        </Tabs>
      </DemoCard>

      <DemoCard title="Navigation — buttons">
        <NavButtons />
      </DemoCard>

      <DemoCard title="Navigation — pills">
        <NavPills />
      </DemoCard>

      <DemoCard title="Menu">
        <MenuButton label="Open menu" icon={<IconMenu />}>
          <MenuItem>New…</MenuItem>
          <MenuItem isDisabled>Open…</MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuLabel>Save</MenuLabel>
            <MenuShortcut>⌘S</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <MenuLabel>Delete</MenuLabel>
            <MenuDescription>Delete this thing forever</MenuDescription>
            <MenuShortcut>⇧⌘⌫</MenuShortcut>
          </MenuItem>
        </MenuButton>
      </DemoCard>
    </GroupSection>
  );
}
