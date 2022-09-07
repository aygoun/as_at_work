import React from "react";
import person from "../assets/person.png";
import logoAndText from "../assets/logoAndText.png";
import "./styles.css";

const Header = () => {
  return (
    <div className="header-main-container">
      <div className="header-sub-container">
        <div className="header-logo-container flex1">
          <img src={logoAndText} alt="logo" className="logo" />
        </div>
        <img src={person} alt="profile" className="flex1 img" />
      </div>
    </div>
  );
};

export default Header;
