import { Link } from "react-router-dom";
import s from "./style.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

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
            {isNavActive ? <GrClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
          {isNavActive && (
            <div className={s.menu}>
              <div className={s.menuLinks}>
                {navLinks.map((link) => (
                  <Link key={link.id} to={link.href} className={s.menuLink}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
