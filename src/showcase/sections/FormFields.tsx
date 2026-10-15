import { Flex } from "layout";
import {
  InputField,
  Search,
  SelectField,
  SelectItem,
  SliderField,
  TextareaField,
} from "primitives";
import { useState } from "react";
import { DemoCard, GroupSection } from "../kit";

const FRUITS = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Grape",
  "Kiwi",
  "Lemon",
  "Lime",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

function SearchDemo() {
  const [results, setResults] = useState<string[]>([]);
  return (
    <Search
      aria-label="Search fruits"
      onSearch={(term) =>
        setResults(
          term ? FRUITS.filter((f) => f.match(new RegExp(term, "i"))) : []
        )
      }
      results={results}
    />
  );
}

export function FormFields() {
  return (
    <GroupSection
      id="form-fields"
      title="Form fields"
      description="Text inputs, selects, sliders, and search — all with labels and descriptions."
    >
      <DemoCard title="Input Field">
        <InputField
          label="Email"
          description="We'll never share it."
          placeholder="you@example.com"
          type="email"
          style={{ width: "100%" }}
        />
      </DemoCard>

      <DemoCard title="Select Field">
        <SelectField
          label="Day of week"
          description="Pick a day"
          defaultSelectedKey="monday"
          placeholder="Select a day"
          style={{ width: "100%" }}
        >
          <SelectItem id="monday">Monday</SelectItem>
          <SelectItem id="tuesday">Tuesday</SelectItem>
          <SelectItem id="wednesday">Wednesday</SelectItem>
          <SelectItem id="thursday">Thursday</SelectItem>
          <SelectItem id="friday">Friday</SelectItem>
        </SelectField>
      </DemoCard>

      <DemoCard title="Textarea Field" wide>
        <TextareaField
          label="Notes"
          description="Tell us a little about yourself."
          placeholder="Text goes here"
          style={{ width: "100%" }}
        />
      </DemoCard>

      <DemoCard title="Slider Field">
        <Flex style={{ width: "100%" }}>
          <SliderField
            label="Price range"
            description="Drag the handles"
            defaultValue={[30, 70]}
            showOutput
          />
        </Flex>
      </DemoCard>

      <DemoCard title="Search">
        <SearchDemo />
      </DemoCard>
    </GroupSection>
  );
}
