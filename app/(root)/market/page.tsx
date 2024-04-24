"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { Breadcrumbs, BreadType } from "@/components/breadcrumbs";

const Market = () => {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumbs
        pathname={pathname}
        classNames={"flex items-center "}
        variant={BreadType.withslesh}
      />
    </div>
  );
};

export default Market;
