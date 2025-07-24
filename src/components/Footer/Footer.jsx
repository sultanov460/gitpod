import React from "react";
import s from "./style.module.scss";
import { FooterColumn } from "../FooterColumn/FooterColumn";

export const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Features",
      href: "/",
    },
    {
      id: 3,
      title: "Pricing",
      href: "/",
    },
    {
      id: 4,
      title: "Changelog",
      href: "/",
    },
    {
      id: 5,
      title: "Self-Hosted",
      href: "/",
    },
    {
      id: 6,
      title: "Gitpod",
      href: "/",
    },
    {
      id: 7,
      title: "Status",
      href: "/",
    },
  ];
  return (
    <footer>
      <div className={s.wrapper}>
        <div className={s.rows}>
          <FooterColumn title={"Gitpod"} links={footerLinks} />{" "}
          <FooterColumn title={"Developer"} links={footerLinks} />{" "}
          <FooterColumn title={"Gitpod"} links={footerLinks} />
          <FooterColumn title={"Gitpod"} links={footerLinks} />
        </div>
        <div className={s.copyright}>
          <img src="/copyright.svg" alt="" />
          <img src="/logos.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};
