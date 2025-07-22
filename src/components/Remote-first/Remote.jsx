import React from "react";
import s from "./style.module.scss";
export const Remote = () => {
  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.title}>Remote-first. Secure by design.</h1>
          <div className={s.image}>
            <img src="remote-section.png" alt="" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};
