import React from "react";
import s from "../style.module.scss";

export const Prices = () => {
  return (
    <div className={s.price}>
      <div className={s.priceWrapper}>
        <h1>Sign up to be the first to receive matches.</h1>
        <div className={s.priceLines}>
          <div className={s.priceLine}>
            <p>1 month</p>
            <p>9.99$</p>
          </div>
          <div className={s.priceLine}>
            <p>12 month</p>
            <p>99.99$</p>
          </div>
          <div className={s.priceLine}>
            <p>24 month</p>
            <p>199.99$</p>
          </div>
        </div>
        <button>Purchase Now</button>
      </div>
    </div>
  );
};
