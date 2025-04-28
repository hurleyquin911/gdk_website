import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button, buttonVariants } from "../components/ui/button";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink href="/">
          <div className="bg-white p-2 rounded-2xl h-20 w-auto flex items-center justify-center">
            <img
              src={Logo} // Ganti dengan path ke file logo Anda
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </NavLink>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
