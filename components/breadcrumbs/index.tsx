import React, {
  FunctionComponent,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";

export enum BreadType {
  withx = "x",
  withslesh = "/",
}

interface BreadcrumbsType {
  pathname: string;
  classNames?: string;
  prevPathname?: URLSearchParams;
  variant: BreadType;
}

export const Breadcrumbs: FunctionComponent<BreadcrumbsType> = ({
  classNames,
  pathname,
  variant,
}) => {
  return (
    <section>
      {variant === BreadType.withx ? (
        <div className={classNames}>
          {pathname.startsWith("/") ? pathname.split("/").join(" x ") : ""}
        </div>
      ) : (
        <div className={classNames}>
          {pathname.startsWith("/") ? pathname.split("/").join(" / ") : ""}
        </div>
      )}
    </section>
  );
};
