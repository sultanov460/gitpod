import s from "./style.module.scss";
import React from "react";
import { Link } from "react-router-dom";

export const FooterColumn = ({ title, links }) => {
  return (
    <div className={s.row}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.list}>
        {links.map((link) => (
          <Link className={s.link} key={link.id} to={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
