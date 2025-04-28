import React from "react";
import { NavLink } from "react-router-dom";

import { FaYoutube, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/aditia-nur-lukman-49a16327a/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/quintweb00?igsh=Znc0ZnFwMW5kOTEy",
  },
  {
    icon: <FaTiktok />,
    path: "https://github.com/hurleyquin911",
  },
  {
    icon: <FaYoutube />,
    path: "https://github.com/hurleyquin911",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <NavLink key={index} to={item.path} className={iconStyles}>
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Social;
