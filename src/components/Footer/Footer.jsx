import React from "react";
import s from "./style.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={s.wrapper}>
        <div className={s.rows}>
          <div className={s.row}>
            <a href="#" className={s.title}>
              Gitpod
            </a>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
            <a href="#">Self-Hosted</a>
            <a href="#">Gitpod vs Github</a>
            <a href="#">Codespaces</a>
            <a href="#">Status</a>
          </div>
          <div className={s.row}>
            <a href="#" className={s.title}>
              Developer
            </a>
            <a href="#">Getting started</a>
            <a href="#">Screencasts</a>
            <a href="#">Blog</a>
            <a href="#">Documentation</a>
            <a href="#">Report a bug</a>
            <a href="#">Community</a>
          </div>
          <div className={s.row}>
            <a href="#" className={s.title}>
              Company
            </a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Media Kit</a>
          </div>
          <div className={s.row}>
            <a href="#" className={s.title}>
              Legal
            </a>
            <a href="#">Imprint</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className={s.copyright}>
          <img src="copyright.svg" alt="" />
          <img src="logos.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};
