import { useEffect, useMemo, useState } from "react";
import { StoryCanvas } from "./StoryCanvas";
import {
  ALL_ENTRIES,
  SECTIONS,
  findEntry,
  type ShowcaseSection,
} from "./registry";
import "./showcase.css";

function readHash(): string | null {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw || null;
}

/** Filter the section tree down to stories matching the search query. */
function filterSections(sections: ShowcaseSection[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return sections;
  return sections
    .map((section) => ({
      ...section,
      groups: section.groups
        .map((group) => ({
          ...group,
          stories: group.stories.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              group.name.toLowerCase().includes(q) ||
              section.name.toLowerCase().includes(q),
          ),
        }))
        .filter((group) => group.stories.length > 0),
    }))
    .filter((section) => section.groups.length > 0);
}

export function Showcase() {
  const [selectedId, setSelectedId] = useState<string | null>(
    () => readHash() ?? ALL_ENTRIES[0]?.id ?? null,
  );
  const [query, setQuery] = useState("");

  // Keep selection in sync with the URL hash (back/forward + shareable links).
  useEffect(() => {
    const onHashChange = () => setSelectedId(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (selectedId && readHash() !== selectedId) {
      window.location.hash = `/${selectedId}`;
    }
  }, [selectedId]);

  const filtered = useMemo(() => filterSections(SECTIONS, query), [query]);
  const selected = findEntry(selectedId) ?? ALL_ENTRIES[0];
  const total = ALL_ENTRIES.length;

  return (
    <div className="showcase">
      <aside className="showcase-sidebar">
        <div className="showcase-brand">
          <div className="showcase-brand-mark" aria-hidden />
          <div>
            <div className="showcase-brand-title">SDS Playground</div>
            <div className="showcase-brand-sub">{total} components &amp; variants</div>
          </div>
        </div>

        <div className="showcase-search">
          <input
            type="search"
            placeholder="Search components…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search components"
          />
        </div>

        <nav className="showcase-nav" aria-label="Components">
          {filtered.length === 0 && (
            <p className="showcase-nav-empty">No matches for “{query}”.</p>
          )}
          {filtered.map((section) => (
            <div key={section.name} className="showcase-nav-section">
              <div className="showcase-nav-section-title">{section.name}</div>
              {section.groups.map((group) => (
                <div key={group.key} className="showcase-nav-group">
                  <div className="showcase-nav-group-title">{group.name}</div>
                  <ul>
                    {group.stories.map((entry) => (
                      <li key={entry.id}>
                        <button
                          type="button"
                          className={
                            "showcase-nav-item" +
                            (entry.id === selected?.id ? " is-active" : "")
                          }
                          onClick={() => setSelectedId(entry.id)}
                        >
                          {entry.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="showcase-main">
        {selected ? (
          <>
            <header className="showcase-header">
              <div className="showcase-header-crumb">
                {selected.meta.title?.replace(/^SDS ?/, "") ?? ""}
              </div>
              <h1 className="showcase-header-title">{selected.name}</h1>
            </header>
            <div className="showcase-stage">
              <StoryCanvas entry={selected} />
            </div>
          </>
        ) : (
          <div className="showcase-empty">
            <h1>No components found</h1>
            <p>
              Add a component with a <code>*.stories.tsx</code> file under{" "}
              <code>src/stories/</code> and it will appear here automatically.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
