import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header-section">
      <h1 className="header-section__title">{title}</h1>
    </div>
  );
};

export default Header;
