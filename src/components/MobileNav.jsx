import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

import Logo from "../assets/img/Logo.png";

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

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-20 text-2xl font-second">
          <NavLink href="/">
            <img
              src={Logo} // Ganti dengan jalur file logomu
              alt="Logo"
              className="w-16 bg-white rounded-lg " // Atur ukuran logo sesuai kebutuhan
            />
          </NavLink>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <NavLink to={link.path} key={index}>
              <a
                className={`text-xl capitalize ${link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent"
                  } transition-all`}
              >
                {link.name}
              </a>
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
