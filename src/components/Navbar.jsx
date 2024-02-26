import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-row  items-center gap-5 font-Ubuntu">
      <NavLink to="/workpage" className="font-semibold text-xl">
        Works
      </NavLink>
      <NavLink to="/articlepage" className="font-semibold text-xl">
        Articles
      </NavLink>
      <NavLink to="/articlepage" className="font-semibold text-xl">
        CV
      </NavLink>
    </nav>
  );
};

export default Navbar;
