import React from "react";
import { NavbarWrapper, NavbarItem, ItemText } from "./styles";
import { Row, Column } from "../shared";
import Logo from "../logo/logo";

function Navbar(props) {
  return (
    <NavbarWrapper>
      <NavbarItem>
        <Logo />
      </NavbarItem>
    </NavbarWrapper>
  );
}

export default Navbar;
