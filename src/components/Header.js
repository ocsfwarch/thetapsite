import React from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <div className="app_header">
      <div className="app_header_banner">The TAP Site</div>
      <div className={"app_header_menu"}>
        <NavBar />
      </div>
    </div>
  );
};
