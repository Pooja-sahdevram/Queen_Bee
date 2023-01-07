import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/Hero2.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { duration: 4, type: "spring" };
  return (
    <div className={css.Container}>
      {/* {left side} */}
      <div className={css.h_side}>
        <span className={css.test1}>Skin Protection Cream</span>

        <div className={css.test2}>
          <span>Trendy Collection</span>

          <span>چمڪندڙ</span>
          <span>خوبصورت </span>
          <span> Dαȥȥʅιɳɠ</span>
          <span>ਚਮਕਦਾਰ</span>
        </div>
      </div>
      {/* { Middle side} */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "3rem" }}
          whileInView={{ bottom: "1rem" }}
          className={css.Circle}
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ bottom: "-3rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />

        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={css.h_side}>
        <div className={css.traffic}>
          <span>2.5M</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customer}>
          <span>1M</span>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
