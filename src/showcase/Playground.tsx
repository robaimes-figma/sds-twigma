import { Logo, Text, TextSmall, TextTitlePage } from "primitives";
import "./showcase.css";
import { Actions } from "./sections/Actions";
import { Breadcrumbs } from "./sections/Breadcrumbs";
import { DataDisplay } from "./sections/DataDisplay";
import { FormFields } from "./sections/FormFields";
import { LayoutDemo } from "./sections/LayoutDemo";
import { NavigationDemo } from "./sections/NavigationDemo";
import { Overlays } from "./sections/Overlays";
import { Selection } from "./sections/Selection";
import { Typography } from "./sections/Typography";

const NAV = [
  { id: "actions", label: "Actions" },
  { id: "typography", label: "Typography" },
  { id: "form-fields", label: "Form fields" },
  { id: "selection", label: "Selection controls" },
  { id: "data-display", label: "Data display" },
  { id: "breadcrumbs", label: "Breadcrumbs" },
  { id: "navigation", label: "Navigation" },
  { id: "overlays", label: "Overlays & feedback" },
  { id: "layout", label: "Layout" },
];

export function Playground() {
  return (
    <div className="pg-shell">
      <aside className="pg-sidebar">
        <div className="pg-sidebar-brand">
          <Logo href="#" />
          <Text>SDS Playground</Text>
        </div>
        <nav className="pg-nav">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="pg-main">
        <div className="pg-intro">
          <TextTitlePage>Simple Design System</TextTitlePage>
          <TextSmall>
            A living playground of every component — browse, interact, and test
            them in one place.
          </TextSmall>
        </div>

        <Actions />
        <Typography />
        <FormFields />
        <Selection />
        <DataDisplay />
        <Breadcrumbs />
        <NavigationDemo />
        <Overlays />
        <LayoutDemo />
      </main>
    </div>
  );
}
