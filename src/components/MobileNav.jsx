import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

const MobileNav = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="flex flex-col justify-center items-center h-screen gap-10 uppercase text-white">
      <NavLink
        to="/workpage"
        onClick={handleClick}
        className="font-semibold hover:text-black text-2xl flex gap-5 items-center"
      >
        <BsPersonWorkspace />
        Works
      </NavLink>
      <NavLink
        to="/articlepage"
        onClick={handleClick}
        className="font-semibold hover:text-black text-2xl flex gap-5 items-center"
      >
        <MdArticle />
        Articles
      </NavLink>
      <a
        href={resume}
        download="resume"
        onClick={handleClick}
        className="hover:text-black font-semibold text-2xl flex gap-5 items-center"
      >
        <GrCertificate />
        CV
      </a>
    </nav>
  );
};

export default MobileNav;
