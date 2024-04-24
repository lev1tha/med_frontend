"use client";
import React, { useState } from "react";

export const FaqSelect = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive(!active)}
      style={{
        cursor: "pointer",
      }}
      className={!active ? "faq_select" : "faq_select active"}
    >
      <div className="faq_select_inner">
        <div className="faq_select_top">
          <div className="faq_select_title">
            средние слова для описания слова для описания средние слова для
            описания средние слова для средние слова описания средние слова
          </div>
          <div className="faq_select_arrow">
            <svg
              className={active ? "active" : ""}
              width="28.000000"
              height="28.000000"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip8054_4853">
                  <rect
                    id="chevron-down"
                    width="28.000000"
                    height="28.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <g opacity="0.600000">
                <g clipPath="url(#clip8054_4853)">
                  <path
                    id="Icon"
                    d="M7 10.5L14 17.5L21 10.5"
                    stroke="#202020"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div
          className={active ? "faq_select_bottom" : "faq_select_bottom active"}
        >
          средние слова для описания для описания средние слова для описания
          средние слова средние слова описания средние слова для описания слова
          для описания средние слова для описания слова для средние слова
          описания средние описания для описания средние слова для описания
          средние слова для средние слова описания средние для описания слова
          дляописания средние слова для описания средние слова для средние слова
          описания средние для описания
        </div>
      </div>
    </div>
  );
};
