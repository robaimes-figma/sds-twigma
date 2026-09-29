import type { Meta, StoryObj } from "@storybook/react";
import { IconHome } from "icons";
import { Flex } from "layout";
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  Breadcrumbs,
} from "primitives";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "SDS Primitives/Breadcrumbs",
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    separator: {
      control: { type: "select" },
      options: ["chevron", "slash"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const StoryBreadcrumbs: Story = {
  name: "Breadcrumbs",
  args: {
    size: "medium",
    separator: "chevron",
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem href="#" icon={<IconHome />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Section</BreadcrumbItem>
      <BreadcrumbItem current>Current</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const StorySizes: Story = {
  name: "Sizes",
  render: () => (
    <Flex direction="column" gap="600">
      {(["small", "medium", "large"] as const).map((size) => (
        <Breadcrumbs key={size} size={size}>
          <BreadcrumbItem href="#" icon={<IconHome />}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Section</BreadcrumbItem>
          <BreadcrumbItem current>Current</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </Flex>
  ),
};

export const StorySeparators: Story = {
  name: "Separators",
  render: () => (
    <Flex direction="column" gap="600">
      <Breadcrumbs separator="chevron">
        <BreadcrumbItem href="#" icon={<IconHome />}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Section</BreadcrumbItem>
        <BreadcrumbItem current>Current</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs separator="slash">
        <BreadcrumbItem href="#" icon={<IconHome />}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Section</BreadcrumbItem>
        <BreadcrumbItem current>Current</BreadcrumbItem>
      </Breadcrumbs>
    </Flex>
  ),
};

export const StoryOverflow: Story = {
  name: "Overflow",
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="#" icon={<IconHome />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbEllipsis
        onPress={() => alert("Reveal collapsed breadcrumbs")}
      />
      <BreadcrumbItem current>Section</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const StoryStates: Story = {
  name: "Item States",
  render: () => (
    <Flex direction="column" gap="400" alignSecondary="start">
      <BreadcrumbItem href="#" icon={<IconHome />}>
        Default
      </BreadcrumbItem>
      <BreadcrumbItem isDisabled icon={<IconHome />}>
        Disabled
      </BreadcrumbItem>
      <BreadcrumbItem current icon={<IconHome />}>
        Current
      </BreadcrumbItem>
      <BreadcrumbItem href="#" icon={<IconHome />} truncate>
        A very long breadcrumb label that gets truncated
      </BreadcrumbItem>
    </Flex>
  ),
};
