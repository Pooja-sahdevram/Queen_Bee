import React, { useState } from "react";
import css from "./Product.module.css";
import plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { type } from "@testing-library/user-event/dist/type";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
const Product = () => {
  // const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProduct] = useState(ProductsData);
  const filter = (type) => {
    setMenuProduct(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={plane} alt="" />
      <h1 style={{ color: "white" }}>Feature Product</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProduct(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>

        <div className={css.list}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Shop Now</div>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
