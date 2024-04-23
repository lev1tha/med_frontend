import {
  FooterApp1,
  FooterApp2,
  FooterApp3,
  FooterApp4,
  FooterApp5,
  Logo,
} from "@/assets/svg";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-color-2">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_top flex items-center justify-between py-14">
            <div className="footer_links flex flex-col items-center justify-center ">
              <Logo theme={"dark"} />
              <div className="footer_apps flex items-center gap-5">
                <FooterApp1 />
                <FooterApp2 />
                <FooterApp3 />
                <FooterApp4 />
                <FooterApp5 />
              </div>
            </div>
            <div className="nav flex items-center gap-4">
              <div className="nav_bar font_16">Главная</div>
              <div className="nav_bar font_16">Карта</div>
              <div className="nav_bar font_16">Помощь</div>
            </div>
            <div className="footer_nums">
              <div className="footer_num font_16">+ 000 000 00 00</div>
              <div className="footer_num font_16">+ 000 000 00 00</div>
              <div className="footer_num font_16">dsadasdsdasad@Gmail.com</div>
            </div>
          </div>
          <div className="footer_bottom flex items-center justify-center mt-[44px]">
            © 2024 Все права защищены. Компания PROlab
          </div>
        </div>
      </div>
    </footer>
  );
};
