import { IconCheck, IconTrash } from "icons";
import { placeholder } from "images";
import { Flex } from "layout";
import {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarBlock,
  AvatarButton,
  AvatarGroup,
  Button,
  IconButton,
  Label,
  ListBox,
  ListBoxItem,
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
  Tag,
  TagButton,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
} from "primitives";
import { DemoCard, GroupSection } from "../kit";

const USERS = [
  { handle: "@porkyp", name: "Porky Pig", access: "admin" },
  { handle: "@bugzy", name: "Bugs Bunny", access: "admin" },
  { handle: "@daffy", name: "Daffy Duck", access: "user" },
];

export function DataDisplay() {
  return (
    <GroupSection
      id="data-display"
      title="Data display"
      description="Tables, tags, avatars, accordions, lists, and pagination."
    >
      <DemoCard title="Table" wide>
        <Table aria-label="Team members" style={{ width: "100%" }}>
          <TableHead>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Handle</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHead>
          <TableBody>
            {USERS.map((user) => (
              <TableRow key={user.handle}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.handle}</TableCell>
                <TableCell>
                  <Tag
                    scheme={user.access === "user" ? "warning" : "danger"}
                  >
                    {user.access}
                  </Tag>
                </TableCell>
                <TableCell>
                  <Flex alignPrimary="end" gap="200" alignSecondary="center">
                    <Button size="small" variant="neutral">
                      View
                    </Button>
                    <IconButton size="small" aria-label="Delete">
                      <IconTrash />
                    </IconButton>
                  </Flex>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoCard>

      <DemoCard title="Tag — schemes">
        <Flex wrap gap="200" alignPrimary="center">
          <Tag scheme="brand">Brand</Tag>
          <Tag scheme="danger">Danger</Tag>
          <Tag scheme="positive">Positive</Tag>
          <Tag scheme="warning">Warning</Tag>
          <Tag scheme="neutral">Neutral</Tag>
        </Flex>
      </DemoCard>

      <DemoCard title="Tag Button & Toggle">
        <Flex direction="column" gap="400" alignSecondary="center">
          <Flex wrap gap="200" alignPrimary="center">
            <TagButton scheme="brand">Add</TagButton>
            <TagButton scheme="neutral">Filter</TagButton>
          </Flex>
          <TagToggleGroup selectionMode="single" defaultSelectedKeys={["all"]}>
            <Label>Filter</Label>
            <TagToggleList>
              <TagToggle id="all" iconStart={<IconCheck />}>
                All
              </TagToggle>
              <TagToggle id="active">Active</TagToggle>
              <TagToggle id="done">Done</TagToggle>
            </TagToggleList>
          </TagToggleGroup>
        </Flex>
      </DemoCard>

      <DemoCard title="Avatars">
        <Flex gap="200" alignSecondary="center" alignPrimary="center">
          <Avatar src={placeholder} initials="JA" size="small" />
          <Avatar initials="LO" />
          <Avatar src={placeholder} initials="WM" square size="large" />
        </Flex>
      </DemoCard>

      <DemoCard title="Avatar Group & Block">
        <Flex direction="column" gap="400" alignSecondary="center">
          <AvatarGroup spacing="negative-100" max={3}>
            <Avatar initials="JA" />
            <Avatar src={placeholder} />
            <Avatar initials="LO" />
            <Avatar src={placeholder} />
            <Avatar initials="WM" />
          </AvatarGroup>
          <AvatarBlock title="Full Name" description="@fullname">
            <AvatarButton square size="large" src={placeholder} />
          </AvatarBlock>
        </Flex>
      </DemoCard>

      <DemoCard title="Accordion" wide>
        <Accordion style={{ width: "100%" }}>
          <AccordionItem title="What is included?">
            Answer the frequently asked question in a simple sentence, a longish
            paragraph, or even in a list.
          </AccordionItem>
          <AccordionItem title="Can I cancel anytime?">
            Answer the frequently asked question in a simple sentence, a longish
            paragraph, or even in a list.
          </AccordionItem>
          <AccordionItem title="Do you offer support?">
            Answer the frequently asked question in a simple sentence, a longish
            paragraph, or even in a list.
          </AccordionItem>
        </Accordion>
      </DemoCard>

      <DemoCard title="List Box">
        <ListBox aria-label="Animals" layout="stack" orientation="vertical">
          <ListBoxItem>Aardvark</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Penguin</ListBoxItem>
        </ListBox>
      </DemoCard>

      <DemoCard title="Pagination" wide>
        <Pagination>
          <PaginationPrevious />
          <PaginationList>
            <PaginationPage href="?page=1">1</PaginationPage>
            <PaginationPage href="?page=2">2</PaginationPage>
            <PaginationPage href="?page=3" current>
              3
            </PaginationPage>
            <PaginationPage href="?page=4">4</PaginationPage>
            <PaginationGap />
            <PaginationPage href="?page=66">66</PaginationPage>
          </PaginationList>
          <PaginationNext href="?page=4" />
        </Pagination>
      </DemoCard>
    </GroupSection>
  );
}
