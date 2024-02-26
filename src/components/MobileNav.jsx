import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="flex flex-col justify-center items-center h-screen gap-10 uppercase text-white">
      <NavLink to="/workpage" className="font-semibold text-xl">
        Works
      </NavLink>
      <NavLink to="/articlepage" className="font-semibold text-xl">
        Articles
      </NavLink>
      <NavLink to="/article" className="font-semibold text-xl">
        CV
      </NavLink>
      <NavLink to="/contactpage" className="font-semibold text-xl">
        Contacts
      </NavLink>
    </nav>
  );
};

export default MobileNav;
