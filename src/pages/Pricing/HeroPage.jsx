import React from "react";
import s from "../style.module.scss";

export const HeroPage = () => {
  return (
    <div>
      <div className={s.heroWrapper}>
        <h1>Pricing</h1>
        <p>Get more Gitpod, pay less.</p>
        <button>Try now</button>
      </div>
    </div>
  );
};
