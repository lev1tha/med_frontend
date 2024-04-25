"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

import { Breadcrumbs, BreadType } from "@/components/breadcrumbs";
import Sidebar from "@/components/sidebar";

const Market = () => {
  const pathname = usePathname();

  const [select, setSelect] = useState("Высшего сорта");
  const [sSelect, setSselect] = useState("Натуральная");

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
          <Breadcrumbs
            pathname={pathname}
            variant={BreadType.filter}
            stateSelect={sSelect}
            classNames="text-xl font-sofia text-gray-500"
          />
        </div>
        <div className="filtration flex gap-5">
          <form action="" id="firstSelector" className="max-w-[160px] w-full">
            <select
              name=""
              id="firstSelector"
              className="font-sofia outline-none border-none"
              onChange={(event) => setSelect(event.target.value)}
            >
              <option value="Высшего сорта">Высшего сорта</option>
              <option value="Второй сорт">Второй сорт</option>
              <option value="Третего сорта">Третего сорта</option>
              <option value="Остаток">Остаток</option>
            </select>
          </form>

          <form action="" id="firstSelector" className="max-w-[160px] w-full">
            <select
              name=""
              id="secondSelector"
              className="font-sofia outline-none border-none"
              onChange={(event) => setSselect(event.target.value)}
            >
              <option value="Нарульное">Нарульное</option>
              <option value="Химическая">Химическая</option>
              <option value="Обработка">Обработка</option>
            </select>
          </form>
        </div>
      </div>
      <section>
        <Sidebar title={"Ноги"} />
        <Sidebar title={"Мозги"} />
        <Sidebar title={"Голова"} />
      </section>
    </>
  );
};

export default Market;
