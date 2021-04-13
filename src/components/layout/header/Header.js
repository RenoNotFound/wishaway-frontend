import React from "react";
import NavBar from "./Navbar";
import HeaderBar from "./HeaderBar";

import "./header.scss";

export default function Header() {
  return (
    <header>
      <HeaderBar />
      <NavBar />
    </header>
  );
}
