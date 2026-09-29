import clsx from "clsx";
import { IconChevronRight, IconMoreHorizontal, IconSlash } from "icons";
import {
  Children,
  ComponentPropsWithoutRef,
  Fragment,
  ReactNode,
  createContext,
  useContext,
} from "react";
import { AnchorOrButton, AnchorOrButtonProps } from "utils";
import "./breadcrumbs.css";

export type BreadcrumbSize = "small" | "medium" | "large";
export type BreadcrumbSeparator = "chevron" | "slash";

type BreadcrumbsContextValue = { size: BreadcrumbSize };
const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({
  size: "medium",
});

export type BreadcrumbsProps = Omit<ComponentPropsWithoutRef<"nav">, "children"> & {
  children?: ReactNode;
  size?: BreadcrumbSize;
  separator?: BreadcrumbSeparator;
};
/**
 * Breadcrumb trail. Lays out `BreadcrumbItem`s (and an optional
 * `BreadcrumbEllipsis`) joined by separators. Keep the current page last and
 * mark it with `current`.
 */
export function Breadcrumbs({
  children,
  className,
  size = "medium",
  separator = "chevron",
  "aria-label": ariaLabel = "Breadcrumb",
  ...props
}: BreadcrumbsProps) {
  const items = Children.toArray(children);
  const classNames = clsx(className, "breadcrumbs", `breadcrumbs-size-${size}`);

  return (
    <BreadcrumbsContext.Provider value={{ size }}>
      <nav aria-label={ariaLabel} className={classNames} {...props}>
        <ol className="breadcrumbs-list">
          {items.map((child, index) => (
            <Fragment key={index}>
              <li className="breadcrumbs-list-item">{child}</li>
              {index < items.length - 1 && (
                <li aria-hidden className="breadcrumbs-separator">
                  {separator === "slash" ? <IconSlash /> : <IconChevronRight />}
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </nav>
    </BreadcrumbsContext.Provider>
  );
}

export type BreadcrumbItemProps = Omit<AnchorOrButtonProps, "children"> & {
  children?: ReactNode;
  /** Optional leading icon, rendered before the label. */
  icon?: ReactNode;
  /** Overrides the size inherited from the parent `Breadcrumbs`. */
  size?: BreadcrumbSize;
  /** The final, current page. Renders bold and non-interactive. */
  current?: boolean;
  /** Non-interactive, dimmed. */
  isDisabled?: boolean;
  /** Constrain long labels with an ellipsis. Pass a number for a max width in px. */
  truncate?: boolean | number;
};
/**
 * A single breadcrumb. Interactive by default (link when given `href`, button
 * when given `onPress`); non-interactive when `current` or `isDisabled`.
 */
export function BreadcrumbItem({
  children,
  className,
  icon,
  size: sizeProp,
  current,
  isDisabled,
  truncate,
  ...props
}: BreadcrumbItemProps) {
  const { size: contextSize } = useContext(BreadcrumbsContext);
  const size = sizeProp ?? contextSize;
  const classNames = clsx(
    className,
    "breadcrumb-item",
    `breadcrumb-item-size-${size}`,
  );

  const label = (
    <span
      className={clsx(
        "breadcrumb-item-label",
        truncate && "breadcrumb-item-label-truncate",
      )}
      style={typeof truncate === "number" ? { maxWidth: truncate } : undefined}
    >
      {children}
    </span>
  );

  const content = (
    <>
      {icon}
      {label}
    </>
  );

  if (current || isDisabled) {
    return (
      <span
        className={classNames}
        aria-current={current ? "page" : undefined}
        aria-disabled={isDisabled || undefined}
        data-current={current || undefined}
        data-disabled={isDisabled || undefined}
      >
        {content}
      </span>
    );
  }

  return (
    <AnchorOrButton className={classNames} {...props}>
      {content}
    </AnchorOrButton>
  );
}

export type BreadcrumbEllipsisProps = Omit<AnchorOrButtonProps, "children"> & {
  "aria-label"?: string;
};
/**
 * The collapsed-trail action ("…"). Use in place of the middle items when the
 * trail overflows; wire `onPress`/`href` to reveal the hidden crumbs.
 */
export function BreadcrumbEllipsis({
  className,
  "aria-label": ariaLabel = "Show more breadcrumbs",
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <AnchorOrButton
      aria-label={ariaLabel}
      className={clsx(className, "breadcrumb-ellipsis")}
      {...props}
    >
      <IconMoreHorizontal />
    </AnchorOrButton>
  );
}
