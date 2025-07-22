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
          <p>
            You no longer need an over-powered laptop to code, Gitpod works just
            as <br /> smoothly on a Chromebook or iPad. All you need is a
            browser. Gitpod centralizes <br /> all source code and never stores
            it on insecure machines and networks.
          </p>
          <div className={s.btns}>
            <button className={s.btnChrome}>
              <img src="chrome-logo.svg" alt="" /> Chrome Extension
            </button>
            <button className={s.btnFirefox}>
              <img src="firefox-logo.svg" alt="" />
              Firefox Extension
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
