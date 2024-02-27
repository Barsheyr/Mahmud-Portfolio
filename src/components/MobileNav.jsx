import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf";

const MobileNav = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="flex flex-col justify-center items-center h-screen gap-10 uppercase text-white">
      <NavLink
        to="/workpage"
        onClick={handleClick}
        className="font-semibold hover:text-black text-xl"
      >
        Works
      </NavLink>
      <NavLink
        to="/articlepage"
        onClick={handleClick}
        className="font-semibold hover:text-black text-xl"
      >
        Articles
      </NavLink>
      <a
        href={resume}
        download="resume"
        onClick={handleClick}
        className="hover:text-black font-semibold text-xl"
      >
        CV
      </a>
    </nav>
  );
};

export default MobileNav;
