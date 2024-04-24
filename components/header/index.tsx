import { Logo, ProfileIcon, Shop } from "@/assets/svg";
import React from "react";
import { ButtonOrange } from "../buttons";
import { InputOrangeOutlined } from "../inputs";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header bg-color-1 ">
      <div className="container">
        <div className="header_inner flex items-center justify-between py-4">
          <div className="header_left flex gap-10 item-center">
            <Logo theme="light" />
            <div className="nav flex item-center gap-8 text-white">
              <InputOrangeOutlined/>
              <div className="nav_bar font_16">Главная</div>
              <div className="nav_bar font_16">Карта пасек</div>
              <div className="nav_bar font_16">Помощь</div>
            </div>
          </div>
          <div className="header_right flex items-center gap-6">
            <Link
              href="/market"
              style={{
                textDecoration: "none",
              }}
            >
              <ButtonOrange title={"Каталог"} color={"black"} />
            </Link>

            <div className="header_buttons">
              <Shop />
              <ProfileIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
