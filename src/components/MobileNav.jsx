import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="flex flex-col justify-center items-center h-screen gap-10 uppercase text-white">
      <NavLink
        to="/workpage"
        className="font-semibold hover:text-blue-300 text-xl"
      >
        Works
      </NavLink>
      <NavLink
        to="/articlepage"
        className="font-semibold hover:text-blue-300 text-xl"
      >
        Articles
      </NavLink>
      <NavLink
        to="/article"
        className="font-semibold hover:text-blue-300 text-xl"
      >
        CV
      </NavLink>
    </nav>
  );
};

export default MobileNav;
