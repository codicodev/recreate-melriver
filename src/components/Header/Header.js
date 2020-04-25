import React from "react";
import PropTypes from "prop-types";
import Logo from "../Logo";
import Hamburger from "../Hamburger";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <Logo />
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
