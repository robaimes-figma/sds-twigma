import { Flex } from "layout";
import {
  Text,
  TextCode,
  TextEmphasis,
  TextHeading,
  TextLink,
  TextLinkList,
  TextList,
  TextListItem,
  TextPrice,
  TextSmall,
  TextSmallStrong,
  TextStrong,
  TextSubheading,
  TextSubtitle,
  TextTitleHero,
  TextTitlePage,
} from "primitives";
import { DemoCard, GroupSection } from "../kit";

export function Typography() {
  return (
    <GroupSection
      id="typography"
      title="Typography"
      description="The full set of text styles, from hero titles to inline code."
    >
      <DemoCard title="Headings & titles" wide>
        <Flex direction="column" gap="300" style={{ width: "100%" }}>
          <TextTitleHero>Text Title Hero</TextTitleHero>
          <TextTitlePage>Text Title Page</TextTitlePage>
          <TextSubtitle>Text Subtitle</TextSubtitle>
          <TextHeading>Text Heading</TextHeading>
          <TextSubheading>Text Subheading</TextSubheading>
        </Flex>
      </DemoCard>

      <DemoCard title="Body & inline" wide>
        <Flex direction="column" gap="300" style={{ width: "100%" }}>
          <Text>
            This feature is only available on the{" "}
            <TextStrong>Business Plan</TextStrong>. To upgrade, visit your{" "}
            <TextLink href="#">billing settings</TextLink>. Your API key is{" "}
            <TextCode>fig_123456789</TextCode>.
          </Text>
          <TextEmphasis>Text Emphasis</TextEmphasis>
          <TextSmall>Text Small</TextSmall>
          <TextSmallStrong>Text Small Strong</TextSmallStrong>
        </Flex>
      </DemoCard>

      <DemoCard title="Lists">
        <Flex direction="column" gap="400" style={{ width: "100%" }}>
          <TextList>
            <TextListItem>List item one</TextListItem>
            <TextListItem>List item two</TextListItem>
            <TextListItem>List item three</TextListItem>
          </TextList>
          <TextLinkList>
            <TextListItem>
              <TextLink href="#">Link item one</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Link item two</TextLink>
            </TextListItem>
          </TextLinkList>
        </Flex>
      </DemoCard>

      <DemoCard title="Price">
        <Flex gap="600" alignSecondary="end">
          <TextPrice currency="$" price="50.99" label="/ mo" />
          <TextPrice currency="$" price="9.99" label="/ mo" size="small" />
        </Flex>
      </DemoCard>
    </GroupSection>
  );
}
