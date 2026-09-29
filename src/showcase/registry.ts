/**
 * Showcase registry.
 *
 * Auto-discovers every Storybook story in the project and turns it into a
 * browsable catalog for the design-system playground. Because discovery is
 * automatic, any new component you add with its own `*.stories.tsx` file
 * (for example, one generated from a Figma design) shows up here with no
 * extra wiring.
 */
import type { ComponentType } from "react";

/** A single story, ready to render in the canvas. */
export interface StoryEntry {
  /** Stable, URL-safe id used for deep-linking (`#/<id>`). */
  id: string;
  /** Human label for this specific story (e.g. "Button Group"). */
  name: string;
  /** The Storybook story object (has optional `render` and `args`). */
  story: {
    name?: string;
    args?: Record<string, unknown>;
    render?: (args: Record<string, unknown>, context?: unknown) => JSX.Element;
    parameters?: { layout?: "centered" | "fullscreen" | "padded" };
  };
  /** The story file's default export (Storybook `meta`). */
  meta: {
    title?: string;
    component?: ComponentType<Record<string, unknown>>;
    parameters?: { layout?: "centered" | "fullscreen" | "padded" };
  };
}

/** A named group of stories that share a `meta.title` (e.g. "Buttons"). */
export interface ShowcaseGroup {
  key: string;
  name: string;
  stories: StoryEntry[];
}

/** A top-level section (Primitives, Compositions, Layout, ...). */
export interface ShowcaseSection {
  name: string;
  groups: ShowcaseGroup[];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Split a Storybook `title` into a top-level section + group name. */
function parseTitle(title: string): { section: string; group: string } {
  const parts = title.split("/").map((p) => p.trim());
  const head = (parts[0] ?? "").replace(/^SDS ?/, "");
  const section = head || "Overview";
  const group = parts.slice(1).join(" / ") || parts[0] || "Untitled";
  return { section, group };
}

// Order sections deliberately; anything unlisted is appended alphabetically.
const SECTION_ORDER = [
  "Overview",
  "Primitives",
  "Compositions",
  "Examples",
  "Layout",
  "Hooks",
];

function looksLikeStory(value: unknown): value is StoryEntry["story"] {
  return (
    !!value &&
    typeof value === "object" &&
    ("render" in value || "args" in value || "name" in value)
  );
}

function build(): ShowcaseSection[] {
  const modules = import.meta.glob("/src/stories/**/*.stories.tsx", {
    eager: true,
  }) as Record<string, Record<string, unknown>>;

  // group key -> ShowcaseGroup, remembering which section it belongs to.
  const groupsByKey = new Map<string, ShowcaseGroup & { section: string }>();

  for (const [path, mod] of Object.entries(modules)) {
    const meta = mod.default as StoryEntry["meta"] | undefined;
    if (!meta) continue;
    const title = meta.title ?? path;
    const { section, group } = parseTitle(title);
    const groupKey = slugify(`${section}-${group}`);

    let bucket = groupsByKey.get(groupKey);
    if (!bucket) {
      bucket = { key: groupKey, name: group, stories: [], section };
      groupsByKey.set(groupKey, bucket);
    }

    for (const [exportName, value] of Object.entries(mod)) {
      if (exportName === "default") continue;
      if (!looksLikeStory(value)) continue;
      const story = value;
      const name = story.name ?? exportName;
      bucket.stories.push({
        id: `${groupKey}--${slugify(name)}`,
        name,
        story,
        meta,
      });
    }
  }

  // Assemble sections.
  const sectionMap = new Map<string, ShowcaseSection>();
  for (const bucket of groupsByKey.values()) {
    if (bucket.stories.length === 0) continue;
    let section = sectionMap.get(bucket.section);
    if (!section) {
      section = { name: bucket.section, groups: [] };
      sectionMap.set(bucket.section, section);
    }
    section.groups.push({
      key: bucket.key,
      name: bucket.name,
      stories: bucket.stories,
    });
  }

  const sections = [...sectionMap.values()];
  sections.forEach((s) => s.groups.sort((a, b) => a.name.localeCompare(b.name)));
  sections.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.name);
    const ib = SECTION_ORDER.indexOf(b.name);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.name.localeCompare(b.name);
  });

  return sections;
}

export const SECTIONS: ShowcaseSection[] = build();

export const ALL_ENTRIES: StoryEntry[] = SECTIONS.flatMap((s) =>
  s.groups.flatMap((g) => g.stories),
);

export function findEntry(id: string | null | undefined): StoryEntry | undefined {
  if (!id) return undefined;
  return ALL_ENTRIES.find((e) => e.id === id);
}
