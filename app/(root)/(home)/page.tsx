import React from "react";
import "./index.css";

import { CatalogCart, PopularCart } from "@/components/carts";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="main flex relative h-[680px]">
        <div className="background bg-cover bg-repeat "></div>
        <div className="background_triangle_1 bg-cover bg-repeat"></div>
        <div className="background_triangle_2 bg-cover bg-repeat"></div>
      </div>

      <div className="popular_items h-[900px] mt-[44px]">
        <div className="title_section flex justify-between items-center">
          <div className="title h-[auto]">
            <h1 className="font-sofia font-semibold text-[36px] w-[380px] max-w-full h-fit">
              Популярные товары
            </h1>
          </div>
          <div className="all_checked cursor-pointer border-b-2 border-gray-200 max-w-[110px] w-fil ">
            <form action="">
              <Link href={"/market"} />
              <p className="font-sofia text-[16px]">Смотреть все</p>
            </form>
          </div>
        </div>
        <div className="populat_inner_cards flex items-center justify-between">
          <PopularCart />
          <PopularCart />
          <PopularCart />
        </div>
      </div>
      <div className="market_populat_inner">
        <div className="title_section flex justify-between items-center">
          <div className="title h-[auto]">
            <h1 className="font-sofia font-semibold text-[36px] w-[380px] max-w-full h-fit">
              Каталог
            </h1>
          </div>
          <div className="all_checked flex items-center gap-6 cursor-pointer max-w-[110px] w-fil ">
            <form action="">
              <Link href={"/market"} />
              <p className="font-sofia text-[16px]">Популярные</p>
            </form>
            <form action="">
              <Link href={"/market"} />
              <p className="font-sofia text-[16px]">Новые</p>
            </form>
          </div>
        </div>
        <div className="catalog_inner grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-8 mb-12">
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
          <CatalogCart />
        </div>
      </div>
    </>
  );
};

export default Home;
