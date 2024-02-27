import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-row  items-center gap-5 font-Ubuntu">
      <NavLink to="/workpage" className="font-semibold text-xl">
        Works
      </NavLink>
      <NavLink to="/articlepage" className="font-semibold text-xl">
        Articles
      </NavLink>

      <a href={resume} download="resume" className="font-semibold text-xl">
        CV
      </a>
    </nav>
  );
};

export default Navbar;
