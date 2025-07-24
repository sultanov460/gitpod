import React from "react";
import s from "./style.module.scss";

export const Think = () => {
  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.textBox}>
            <h2>Think CI/CD for dev environments</h2>
            <p>
              We invented prebuilds so application code, configuration and
              infrastructure can all be stored as machine-executable code in
              your git repositories and applied to dev environments
              automatically and continuously.
            </p>
            <div className={s.btns}>
              <button className={s.btnPrebuilds}>More on prebuilds</button>
              <button className={s.btnDocumentation}>Documentation</button>
            </div>
          </div>
          <div className={s.image}>
            <img src="/think-section.png" alt="think-section" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};
