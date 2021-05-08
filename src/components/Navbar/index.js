import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__hamburger">
          <i className="fas fa-bars fa-4x"></i>
        </div>
        <div className="navbar__container__logo">
          <i className="fas fa-shuttle-van fa-4x"></i>
        </div>
        <div className="navbar__container__avatar">
          <i className="far fa-user-circle fa-4x"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
