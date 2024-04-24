"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

import { Breadcrumbs, BreadType } from "@/components/breadcrumbs";

const Market = () => {
  const pathname = usePathname();

  const [select, setSelect] = useState("Высшего сорта");
  console.log(select);
  return (
    <>
      <div>
        <Breadcrumbs
          pathname={pathname}
          classNames={
            "flex items-center mt-6 mb-10 font-sofia text-2xl capitalize"
          }
          variant={BreadType.withslesh}
        />
      </div>
      <div className="mb-6 flex items-center gap-4 justify-between">
        <div className="title flex items-center gap-4">
          <div className="suptitle text-4xl font-sofia">
            <h1>Каталог</h1>
          </div>
          <Breadcrumbs
            pathname={pathname}
            classNames="text-xl font-sofia text-gray-500"
            variant={BreadType.withx}
          />
          <Breadcrumbs
            pathname={pathname}
            variant={BreadType.filter}
            stateSelect={select}
            classNames="text-xl font-sofia text-gray-500"
          />
        </div>
        <form action="" id="firstSelector">
          <select
            name=""
            id="firstSelector"
            className="font-sofia outline-none border-none"
            onChange={(event) => setSelect(event.target.value)}
          >
            <option value="высшего сорта">Высшего сорта</option>
            <option value="второй сорт">Второй сорт</option>
            <option value="третего сорта">Третего сорта</option>
            <option value="остаток">Остаток</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default Market;
