"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

import "./index.css";
import SidebarValue from "../sidebarValue";

interface PropsType {
  title?: string;
}

interface FilterType {
  id: number;
  value: string;
}

const filterOneValue: FilterType[] = [
  {
    id: 1,
    value: "Высший сорт",
  },
  {
    id: 2,
    value: "Средний сорт",
  },
  {
    id: 3,
    value: "Низкий сорт",
  },
  {
    id: 4,
    value: "Остаток",
  },
];

const index = ({ title }: PropsType) => {
  const [choised, setChoised] = useState(false);

  const handleChangedChoise = () => {
    setChoised(!choised);
  };

  return (
    <div className="layout">
      <div className="flex flex-col select-none">
        <div
          className="selectedFilterOne w-[170px] max-w-full font-sofia text-2xl font-bold"
          onClick={handleChangedChoise}
        >
          <form action="" onClick={handleChangedChoise}>
            <p>{title}</p>
          </form>
        </div>
        <div className={cn(choised ? "my-8" : "hidden")}>
          {choised &&
            filterOneValue.map((value, index) => (
              <SidebarValue value={value.value} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;
