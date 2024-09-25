import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Hello </h1>
      <Navbar />
      <Outlet    />
    </>
  );
};

export default Layout;
