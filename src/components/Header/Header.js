import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Hamburger from "../Hamburger";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../../animations/menuAnimation";

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
