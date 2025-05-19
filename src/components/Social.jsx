import React from "react";
import { NavLink } from "react-router-dom";

import { FaYoutube, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const socials = [
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/griyadigital_kreasi/?hl=en",
  },
  {
    icon: <FaCartArrowDown />,
    path: "https://linktr.ee/Griyadigital_kreasi"
  },

  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@digital_kreasi?_t=8oE7v92sYcr&_r=1",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@griyadigitalkreasi?si=SxJ2Qv2wyAR6uS7y",
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
