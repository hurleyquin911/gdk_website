import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "IT Shop",
    path: "/itshop",
  },
  {
    name: "IT Service",
    path: "/itservice",
  },
  {
    name: "Network & Security",
    path: "/netservice",
  },
  {
    name: "Digital Marketing",
    path: "/digitalmarketing",
  },
];

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex gap-8 text-black">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className={`  ${link.path === pathname ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
