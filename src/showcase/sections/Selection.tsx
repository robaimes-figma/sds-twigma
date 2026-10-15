import {
  CheckboxField,
  CheckboxGroup,
  RadioField,
  RadioGroup,
  SwitchField,
  SwitchGroup,
} from "primitives";
import { useState } from "react";
import { DemoCard, GroupSection } from "../kit";

function CheckboxDemo() {
  const [selected, setSelected] = useState(true);
  return (
    <CheckboxField
      isSelected={selected}
      onChange={() => setSelected(!selected)}
      label="Subscribe to updates"
      description="Get product news in your inbox."
    />
  );
}

export function Selection() {
  return (
    <GroupSection
      id="selection"
      title="Selection controls"
      description="Checkboxes, radios, and switches — single and grouped."
    >
      <DemoCard title="Checkbox Field">
        <CheckboxDemo />
      </DemoCard>

      <DemoCard title="Checkbox Group">
        <CheckboxGroup label="Toppings" description="Choose any">
          <CheckboxField value="cheese" label="Cheese" />
          <CheckboxField value="mushroom" label="Mushroom" />
          <CheckboxField value="onion" label="Onion" />
        </CheckboxGroup>
      </DemoCard>

      <DemoCard title="Radio Group">
        <RadioGroup label="Plan" description="Choose one" defaultValue="pro">
          <RadioField value="free" label="Free" />
          <RadioField value="pro" label="Pro" />
          <RadioField value="team" label="Team" />
        </RadioGroup>
      </DemoCard>

      <DemoCard title="Switch Field">
        <SwitchField
          label="Enable embeds"
          description="Allow others to embed your content."
        />
      </DemoCard>

      <DemoCard title="Switch Group">
        <SwitchGroup>
          <SwitchField label="Email notifications" />
          <SwitchField label="Push notifications" />
        </SwitchGroup>
      </DemoCard>
    </GroupSection>
  );
}
