import React, { FunctionComponent } from "react";

export enum BreadType {
  withx = "x",
  withslesh = "/",
  filter = " ",
}

interface BreadcrumbsType {
  pathname: string;
  classNames?: string;
  prevPathname?: URLSearchParams;
  variant: BreadType;
  stateSelect?: string;
}

export const Breadcrumbs: FunctionComponent<BreadcrumbsType> = ({
  classNames,
  pathname,
  variant,
  stateSelect,
}) => {
  
  const prefix = "x";

  return (
    <section>
      {variant === BreadType.withx ? (
        <div className={classNames}>
          {pathname.startsWith("/") ? pathname.split("/").join(" x ") : ""}
        </div>
      ) : variant === BreadType.withslesh ? (
        <div className={classNames}>
          {pathname.startsWith("/") ? pathname.split("/").join(" / ") : ""}
        </div>
      ) : variant === BreadType.filter ? (
        <div className={classNames}>
          <p>{`${prefix} ${stateSelect}`}</p>
        </div>
      ) : null}
    </section>
  );
};
