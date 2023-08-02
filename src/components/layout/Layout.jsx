import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutContainer } from "./LayoutStyle";

function Layout() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </>
  );
}

export default Layout;
