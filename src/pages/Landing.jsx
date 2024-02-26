import React from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;
