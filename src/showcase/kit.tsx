import clsx from "clsx";
import { Text, TextHeading, TextSmall } from "primitives";
import { ReactNode } from "react";

/** A titled group of component demos, with an anchor target for the sidebar. */
export function GroupSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="pg-group">
      <header className="pg-group-header">
        <TextHeading>{title}</TextHeading>
        {description ? <Text>{description}</Text> : null}
      </header>
      <div className="pg-grid">{children}</div>
    </section>
  );
}

/** A single bordered canvas showing one component example with a caption. */
export function DemoCard({
  title,
  wide,
  children,
}: {
  title: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <article className={clsx("pg-card", wide && "pg-card-wide")}>
      <div className="pg-card-canvas">{children}</div>
      <footer className="pg-card-label">
        <TextSmall>{title}</TextSmall>
      </footer>
    </article>
  );
}
