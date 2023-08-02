import React from "react";
// import { useState } from "react";
import Logo from "./logo/Logo";
import NavItemes from "./navItems/NavItemes";
import classes from "./Header.module.css";
// import Burdermeun from "./Burgermenu/Burdermeun";
import Search from "./Search/search";
// import SideDrawer from "../UI/SideDrawer/SideDrawer";
// import LogoImg from "../responses/logo//Logo.png";

const Header = () => {
  //   const [SideDrawervisible, setSideDrawervisible] = useState(false);
  //   const toggle = () => {
  //     setSideDrawervisible(!SideDrawervisible);
  //   };
  //   const close = () => {
  //     setSideDrawervisible(false);
  //   };
  return (
    <div className={classes.Header}>
      <div className={classes.container}>
        <Logo />
        <Search />

        <div className={classes.desktop}>
          <NavItemes cartCount={10} />
        </div>
      </div>
    </div>
  );
};

export default Header;
