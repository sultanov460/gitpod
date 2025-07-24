import React from "react";
import s from "./style.module.scss";

export const HeroPage = ({ title, text, button }) => {
  return (
    <div>
      <div className={s.heroWrapper}>
        <h1>{title}</h1>
        <p>{text}</p>
        {button && <button>{button}</button>}
      </div>
    </div>
  );
};
