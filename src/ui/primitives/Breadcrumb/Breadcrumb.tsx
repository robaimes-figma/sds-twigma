import clsx from "clsx";
import { IconChevronRight, IconMoreHorizontal, IconSlash } from "icons";
import {
  Children,
  createContext,
  isValidElement,
  ReactNode,
  useContext,
} from "react";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import "./breadcrumb.css";

export type BreadcrumbSize = "small" | "medium" | "large";
export type BreadcrumbSeparatorType = "chevron" | "slash";

type BreadcrumbContextValue = {
  size: BreadcrumbSize;
  separator: BreadcrumbSeparatorType;
};

const BreadcrumbContext = createContext<BreadcrumbContextValue>({
  size: "medium",
  separator: "chevron",
});

export type BreadcrumbProps = Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "children"
> & {
  children: ReactNode;
  size?: BreadcrumbSize;
  separator?: BreadcrumbSeparatorType;
};

/**
 * Composed breadcrumb trail. Separators are inserted automatically between
 * children. Keep the current page last and mark it with `current`.
 */
export function Breadcrumb({
  children,
  className,
  size = "medium",
  separator = "chevron",
  "aria-label": ariaLabel = "Breadcrumb",
  ...props
}: BreadcrumbProps) {
  const segments = Children.toArray(children).filter(isValidElement);
  return (
    <BreadcrumbContext.Provider value={{ size, separator }}>
      <nav
        aria-label={ariaLabel}
        {...props}
        className={clsx(className, "breadcrumb", `breadcrumb-size-${size}`)}
      >
        <ol className="breadcrumb-list">
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <li key={segment.key ?? index} className="breadcrumb-segment">
                {segment}
                {!isLast && <BreadcrumbSeparator type={separator} />}
              </li>
            );
          })}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}

export type BreadcrumbItemProps = Omit<AnchorOrButtonProps, "children"> & {
  children: ReactNode;
  /** Optional leading icon, e.g. `<IconHome />`. */
  icon?: ReactNode;
  /** Marks the final, current page. Renders non-interactive text. */
  current?: boolean;
  /** Constrains a long label with an ellipsis. */
  truncate?: boolean;
};

export function BreadcrumbItem({
  children,
  className,
  icon,
  current = false,
  isDisabled = false,
  href,
  truncate = false,
  ...props
}: BreadcrumbItemProps) {
  const { size } = useContext(BreadcrumbContext);
  const classNames = clsx(
    className,
    "breadcrumb-item",
    `breadcrumb-item-size-${size}`,
    current && "breadcrumb-item-current",
    isDisabled && "breadcrumb-item-disabled",
  );

  const content = (
    <>
      {icon ? <span className="breadcrumb-item-icon">{icon}</span> : null}
      <span
        className={clsx(
          "breadcrumb-item-label",
          truncate && "breadcrumb-item-label-truncate",
        )}
      >
        {children}
      </span>
    </>
  );

  if (current || isDisabled) {
    return (
      <span
        className={classNames}
        aria-current={current ? "page" : undefined}
        aria-disabled={isDisabled || undefined}
      >
        {content}
      </span>
    );
  }

  return (
    <AnchorOrButton {...props} href={href} className={classNames}>
      {content}
    </AnchorOrButton>
  );
}

export function BreadcrumbSeparator({
  type,
}: {
  type?: BreadcrumbSeparatorType;
}) {
  const { separator } = useContext(BreadcrumbContext);
  const resolved = type ?? separator;
  return (
    <span className="breadcrumb-separator" aria-hidden="true">
      {resolved === "slash" ? (
        <IconSlash size="16" />
      ) : (
        <IconChevronRight size="16" />
      )}
    </span>
  );
}

export type BreadcrumbEllipsisProps = Omit<AnchorOrButtonProps, "children">;

/** Collapsed-trail overflow action. Reveal hidden crumbs on press. */
export function BreadcrumbEllipsis({
  className,
  "aria-label": ariaLabel = "Show more pages",
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <AnchorOrButton
      {...props}
      aria-label={ariaLabel}
      className={clsx(className, "breadcrumb-ellipsis")}
    >
      <IconMoreHorizontal size="20" />
    </AnchorOrButton>
  );
}
