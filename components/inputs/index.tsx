"use client";
import { Checked } from "@/assets/svg";
import { useState } from "react";

export const InputOrangeOutlined = () => {
  return (
    <div className="input_orange_outlined">
      <div className="input_orange_outlined_inner">
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="#FCB60C"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="text" placeholder="Поиск" className="font_16" />
        </div>
      </div>
    </div>
  );
};

interface InputGreyOutlinedProps {
  placeholder?: string;
  type: string;
  style?: any;
}

export const InputGreyOutlined = ({
  placeholder,
  type,
  style,
}: InputGreyOutlinedProps) => {
  return (
    <div className="input_grey_outlined">
      <input
        style={style}
        className="font_16"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

interface TextareaGreyOutlinedProps {
  placeholder?: string;
  style?: any;
}

export const TextareaGreyOutlined = ({
  placeholder,
  style,
}: TextareaGreyOutlinedProps) => {
  return (
    <div className="input_grey_outlined">
      <textarea style={style} className="font_16" placeholder={placeholder} />
    </div>
  );
};

interface CheckBoxCartProps {
  text?: string;
  name?: string;
  fontSize?: string;
  style?: any;
  checked: boolean;
}

export const CheckBoxCart = ({
  text,
  fontSize,
  style,
  checked,
}: CheckBoxCartProps) => {
  return (
    <div style={style} className="checkbox_cart">
      <div>{checked && <Checked /> }</div>
      <span className={fontSize}>{text}</span>
    </div>
  );
};
