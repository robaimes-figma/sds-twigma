import { Flex, FlexItem, Grid, GridItem, Section } from "layout";
import { ReactNode } from "react";
import { DemoCard, GroupSection } from "../kit";

function Block({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: "0.5rem 1rem",
        minHeight: 40,
        borderRadius: "var(--sds-size-radius-100)",
        background: "var(--sds-color-background-brand-default)",
        color: "var(--sds-color-text-brand-on-brand)",
      }}
    >
      {children}
    </div>
  );
}

export function LayoutDemo() {
  return (
    <GroupSection
      id="layout"
      title="Layout"
      description="Flex, Grid, and Section primitives for composing pages."
    >
      <DemoCard title="Flex" wide>
        <Flex container type="quarter" gap="200" wrap style={{ width: "100%" }}>
          <FlexItem size="full">
            <Block>full</Block>
          </FlexItem>
          <FlexItem size="major">
            <Block>major</Block>
          </FlexItem>
          <FlexItem size="minor">
            <Block>minor</Block>
          </FlexItem>
          <FlexItem size="half">
            <Block>half</Block>
          </FlexItem>
          <FlexItem size="half">
            <Block>half</Block>
          </FlexItem>
        </Flex>
      </DemoCard>

      <DemoCard title="Grid" wide>
        <Grid
          columns="repeat(3, 1fr)"
          gap="200"
          container
          style={{ width: "100%" }}
        >
          {[...Array(6)].map((_, i) => (
            <Block key={i}>Item {i + 1}</Block>
          ))}
        </Grid>
      </DemoCard>

      <DemoCard title="Grid — spanning items" wide>
        <Grid
          columns="repeat(4, 1fr)"
          gap="200"
          container
          style={{ width: "100%" }}
        >
          <GridItem column="1 / span 2">
            <Block>spans 2 cols</Block>
          </GridItem>
          <GridItem column="3 / span 2">
            <Block>spans 2 cols</Block>
          </GridItem>
          <GridItem column="1 / span 4">
            <Block>spans 4 cols</Block>
          </GridItem>
        </Grid>
      </DemoCard>

      <DemoCard title="Section — variants" wide>
        <div style={{ width: "100%" }}>
          <Section variant="brand" padding="800">
            <Flex container alignPrimary="center">
              Brand
            </Flex>
          </Section>
          <Section variant="subtle" padding="800">
            <Flex container alignPrimary="center">
              Subtle
            </Flex>
          </Section>
          <Section variant="stroke" padding="800">
            <Flex container alignPrimary="center">
              Stroke
            </Flex>
          </Section>
        </div>
      </DemoCard>
    </GroupSection>
  );
}
