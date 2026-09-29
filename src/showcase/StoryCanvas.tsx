import { Component, ReactNode } from "react";
import type { StoryEntry } from "./registry";

/**
 * Renders a single story. Story `render` functions may use React hooks, so we
 * invoke them from inside a component's render (via <StoryComponent />) rather
 * than calling them directly.
 */
function StoryComponent({ entry }: { entry: StoryEntry }) {
  const { story, meta } = entry;
  const args = story.args ?? {};
  if (typeof story.render === "function") {
    return story.render(args);
  }
  const Comp = meta.component;
  return Comp ? <Comp {...args} /> : null;
}

class StoryErrorBoundary extends Component<
  { children: ReactNode; resetKey: string },
  { error: Error | null }
> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidUpdate(prev: { resetKey: string }) {
    // Clear the error when switching to a different story.
    if (prev.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="showcase-story-error" role="alert">
          <p className="showcase-story-error-title">This story failed to render</p>
          <pre className="showcase-story-error-message">
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export function StoryCanvas({ entry }: { entry: StoryEntry }) {
  const layout =
    entry.story.parameters?.layout ?? entry.meta.parameters?.layout ?? "padded";

  return (
    <div className={`showcase-canvas showcase-canvas-${layout}`}>
      <StoryErrorBoundary resetKey={entry.id}>
        <StoryComponent entry={entry} />
      </StoryErrorBoundary>
    </div>
  );
}
