import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/bee.png";
const Footer = () => {
  return (
    <div>
      <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
          <div className={css.logo}>
            <div className={css.Circle}></div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
