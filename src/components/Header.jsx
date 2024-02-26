import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-slate-50 py-10" : "bg-transparent py-10"
      }   fixed z-20 w-full transition-all font-Ubuntu`}
    >
      <div className="lg:max-w-7xl px-6 lg:mx-auto flex justify-between items-center">
        <Link to="/">
          <h1
            className={`${
              isActive ? "text-slate-900" : "text-slate-900"
            } text-2xl font-bold`}
          >
            Mahmud Akinbami
          </h1>
        </Link>

        <div>
          <Navbar />
        </div>

        {/* mobile nav icons */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-black" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-black" />
          )}
        </button>

        <div
          className={` ${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all bg-blue-200`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
