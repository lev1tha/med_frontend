import Image from "next/image";
import React from "react";
import LoginBg from "../../assets/images/loginbg.png";

export const AuthLayout = ({ height, elem }: any) => {
  return (
    <div className="auth">
      <div className="auth_bg">
        <Image src={LoginBg} alt="" />
      </div>
      <div className="auth_opacity"></div>
      <div className="auth_content">
        <div
          className="auth_content_yellow"
          style={{
            height: height,
          }}
        >
          <div className="auth_content_inner">
            <div className="auth_content_content">{elem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
