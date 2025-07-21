import { Link } from "react-router-dom";
import s from "./style.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  function toggleNav() {
    setIsNavActive(!isNavActive);
  }
  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Pricing", href: "/pricing" },
    { id: 3, title: "Contact", href: "/contact" },
  ];

  return (
    <nav>
      <div className="container">
        <div className={s.wrapper}>
          <Link to="/">
            <img src="/Logo.svg" alt="logo" className={s.logo} />
          </Link>
          <div className={s.links}>
            {navLinks.map((link) => (
              <Link key={link.id} to={link.href} className={s.link}>
                {link.title}
              </Link>
            ))}
          </div>
          <button className={s.btn}>Contact</button>
          <button onClick={toggleNav} className={s.mobile}>
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};
