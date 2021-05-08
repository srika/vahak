import React from "react";

const Header = ({ title, className = "" }) => {
  return (
    <div className="header-section">
      <h1 className={`header-section__title ${className}`}>{title}</h1>
    </div>
  );
};

export default Header;
