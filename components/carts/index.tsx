"use client";
import Image from "next/image";
import Main_img_1 from "../../assets/images/main_img_1.jpg";
import Main_img_2 from "../../assets/images/main_img_2.jpg";
import { ExpandMore, Love, ShopV2, Stars } from "@/assets/svg";
import { ButtonWhiteOrangeBorder, ButtonYellowBlackBorder } from "../buttons";
import imageCart from "../../assets/images/cart_card_img.png";
import { useState } from "react";


export const PopularCart = () => {
  return (
    <div className="popular_cart w-[380px]">
      <div className="popular_cart_inner">
        <Image src={Main_img_1} alt="" />

        <div className="popular_cart_info">
          <div className="popular_cart_info_titles">
            <div className="popular_cart_info_titles_title font_20">
              Мёд цветочный собранный
            </div>
            <div className="popular_cart_info_titles_text font_14">
              Соберался в доль полей цветов и пшен...
            </div>
          </div>
          <div className="popular_cart_info_btn font_16">
            Купить <ShopV2 />
          </div>
        </div>

        <div className="popular_cart_btn">
          <ButtonWhiteOrangeBorder title={"Смотреть все"} />
        </div>
      </div>
    </div>
  );
};

export const MainCart = () => {
  return (
    <div className="main">
      <div className="main_inner">
        <div className="main_left">
          <div className="main_left_top">
            <Image src={Main_img_1} alt="" />
          </div>
          <div className="main_left_bottom">
            <div className="main_left_bottom_inner">
              <div className="main_left_bottom_inner_title font_48">
                Популярные товары
              </div>
              <div className="main_left_bottom_inner_text font_16">
                Средние слова для описания слова для описанияслова для описания
                Средние слова для Средние слова описания Средние для описания
                Средние слова длядля описания Средние слова для описания слова
                для Средние слова описания Средние
              </div>
              <ButtonYellowBlackBorder title={"Смотреть"} />
            </div>
          </div>
        </div>
        <div className="main_right">
          <Image src={Main_img_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export const CatalogCart = () => {
  return (
    <div className="catalog_cart">
      <div className="catalog_cart_inner">
        <div className="catalog_cart_img">
          <div className="catalog_cart_header">
            <div className="catalog_cart_stars">
              <Stars /> 3.2/5
            </div>
            <div className="catalog_cart_love">
              <Love />
            </div>
          </div>
          <Image src={Main_img_1} alt="" />
        </div>

        <div className="catalog_cart_desc">
          <div className="catalog_cart_info_titles_title font_20">
            Мёд цветочный собранный вчера и сегодня он уже продается
          </div>
        </div>

        <div className="catalog_cart_info">
          <div></div>
          <div className="catalog_cart_info_titles">
            <div className="catalog_cart_info_titles_title font_20">
              $ 15.97
            </div>
          </div>
          <div className="catalog_cart_info_btn font_16">
            Купить <ShopV2 />
          </div>
        </div>
      </div>
    </div>
  );
};
interface CartCatCardProps {
  title: string;
}

export const CartCatCard = ({ title }: CartCatCardProps) => {
  const [expand, setExpand] = useState(false);
  const CardHeight = (count: number) => {
    return count * 136 + count * 8 + 40;
  };
  return (
    <div className={`product__cat`}>
      <div onClick={() => setExpand((p) => !p)} className="top">
        <div className="font_20">{title}</div>
        <span className={expand ? "" : "deactivate"}>
          <ExpandMore />
        </span>
      </div>
      <div style={{ height: expand ? CardHeight(2) : 0 }} className={`cards `}>
        <CartProductCard
          title="Мёд цветочный собранный вчера и сегодня он уже продается"
          day={24}
          price="$ 15.97"
        />
        <CartProductCard
          title="Мёд цветочный собранный вчера и сегодня он уже продается"
          day={24}
          price="$ 15.97"
        />
        <div className="delet">Удалить все</div>
      </div>
    </div>
  );
};

interface CartProductCardProps {
  title: string;
  day: number;
  price: string;
  src?: string;
}

export const CartProductCard = ({
  title,
  day,
  price,
  src,
}: CartProductCardProps) => {
  return (
    <div className="cart_product_card">
      <Image src={imageCart} alt="" />
      <div className="content">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke="#FCB60C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="title font_20">{title}</div>
        <div className="bottom">
          <div className="border_right font_20">
            <span>
              <ExpandMore />
            </span>
            {day}
            <span>
              <ExpandMore />
            </span>
          </div>
          <div className="font_20">{price}</div>
        </div>
      </div>
    </div>
  );
};
