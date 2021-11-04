import React from "react";
import { Header } from "../Header";

export const Layout = ({ children, menuItems }) => {
  return (
    <>
      <Header menuItems={menuItems} />
      {children}
    </>
  );
};
