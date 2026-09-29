# SDS Playground

A browsable showcase of every component in this design system. It's the home
screen of the app (`src/App.tsx` → `Showcase`).

## How it works

The playground **auto-discovers** components. It reads every
`src/stories/**/*.stories.tsx` file at build time (`registry.ts` via
`import.meta.glob`) and turns each story into a navigable entry, grouped by the
story's `title` (e.g. `"SDS Primitives/Buttons"`).

That means **you never edit the playground to add a component** — you just add a
story file and it appears in the sidebar automatically.

## Adding a new component (including from Figma)

1. Build the component under `src/ui/primitives/<Name>/` (or `compositions/`,
   `layout/`) and export it from the matching `index.ts`.
2. Add a `src/stories/primitives/<Name>.stories.tsx` with a default `meta`
   (`title`, `component`) and one or more named story exports. Follow any
   existing story as a template.
3. Save. The component shows up in the playground under the section/group from
   its `title`.

When generating a component from a Figma design, produce it in the structure
above plus its `.stories.tsx`, and it will land in the playground with no extra
wiring. Deep-link to any component with `#/<section>-<group>--<story>` (the URL
updates as you browse).

## Files

- `registry.ts` — discovers stories and builds the section → group → story tree.
- `Showcase.tsx` — the shell: searchable sidebar + canvas + deep-linking.
- `StoryCanvas.tsx` — renders one story (respects `parameters.layout`) inside an
  error boundary so a single broken story can't take down the app.
- `showcase.css` — styling, using SDS design tokens.
