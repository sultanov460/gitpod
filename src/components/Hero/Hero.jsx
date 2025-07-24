import React from "react";
import s from "./style.module.scss";

export const Hero = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.textBox}>
          <h1>Always Ready to Code.</h1>
          <p>
            Spin up fresh, automated dev environments for each task, in the
            cloud, in seconds.
          </p>
          <div className={s.action}>
            <button>Try Now</button>
            <p>
              Open a workspace. <br /> Start from any Git context.
            </p>
          </div>
        </div>
        <div className={s.image}>
          <img src="/hero-img.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
