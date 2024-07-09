import React from "react";
import { NavLink } from "react-router-dom";
// import resume from "../assets/resume.pdf";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <nav className="hidden lg:flex flex-row  items-center gap-5 font-Ubuntu">
      <NavLink
        to="/workpage"
        className="font-semibold text-xl hover:text-blue-400"
        onClick={handleClick}
      >
        Works
      </NavLink>
      <NavLink
        to="/articlepage"
        className="font-semibold text-xl hover:text-blue-400"
        onClick={handleClick}
      >
        Articles
      </NavLink>

      <a
        href={resume}
        download="resume"
        className="font-semibold text-xl hover:text-blue-400"
      >
        CV
      </a>
    </nav>
  );
};

export default Navbar;
