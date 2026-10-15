import { IconHome } from "icons";
import { Flex } from "layout";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
} from "primitives";
import { DemoCard, GroupSection } from "../kit";

export function Breadcrumbs() {
  return (
    <GroupSection
      id="breadcrumbs"
      title="Breadcrumbs"
      description="Breadcrumb trails show where a page sits in the hierarchy. The current page comes last and is non-interactive."
    >
      <DemoCard title="Trail — chevron" wide>
        <Breadcrumb separator="chevron">
          <BreadcrumbItem href="#" icon={<IconHome size="16" />}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Section</BreadcrumbItem>
          <BreadcrumbItem current>Current</BreadcrumbItem>
        </Breadcrumb>
      </DemoCard>

      <DemoCard title="Trail — slash" wide>
        <Breadcrumb separator="slash">
          <BreadcrumbItem href="#" icon={<IconHome size="16" />}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Section</BreadcrumbItem>
          <BreadcrumbItem current>Current</BreadcrumbItem>
        </Breadcrumb>
      </DemoCard>

      <DemoCard title="Trail — overflow" wide>
        <Breadcrumb separator="chevron">
          <BreadcrumbItem href="#" icon={<IconHome size="16" />}>
            Home
          </BreadcrumbItem>
          <BreadcrumbEllipsis href="#" />
          <BreadcrumbItem current>Section</BreadcrumbItem>
        </Breadcrumb>
      </DemoCard>

      <DemoCard title="Sizes" wide>
        <Flex direction="column" gap="400">
          <Breadcrumb size="small">
            <BreadcrumbItem href="#" icon={<IconHome size="14" />}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Section</BreadcrumbItem>
            <BreadcrumbItem current>Small</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb size="medium">
            <BreadcrumbItem href="#" icon={<IconHome size="16" />}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Section</BreadcrumbItem>
            <BreadcrumbItem current>Medium</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb size="large">
            <BreadcrumbItem href="#" icon={<IconHome size="20" />}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Section</BreadcrumbItem>
            <BreadcrumbItem current>Large</BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </DemoCard>

      <DemoCard title="Item states">
        <Flex direction="column" gap="300" alignSecondary="start">
          <Breadcrumb aria-label="Item states">
            <BreadcrumbItem href="#" icon={<IconHome size="16" />}>
              Default
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb aria-label="Item states">
            <BreadcrumbItem isDisabled icon={<IconHome size="16" />}>
              Disabled
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb aria-label="Item states">
            <BreadcrumbItem current icon={<IconHome size="16" />}>
              Current
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </DemoCard>

      <DemoCard title="Truncated label">
        <Breadcrumb>
          <BreadcrumbItem href="#" icon={<IconHome size="16" />}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" truncate>
            A very long section name that overflows
          </BreadcrumbItem>
          <BreadcrumbItem current>Current</BreadcrumbItem>
        </Breadcrumb>
      </DemoCard>
    </GroupSection>
  );
}
