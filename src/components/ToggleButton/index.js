import React from "react";

const ToggleButton = ({ title, activeButton, handleToggleButton }) => {
  return (
    <div
      className={`toggle-button-container ${
        title === activeButton && "active"
      }`}
      onClick={() => handleToggleButton(title)}
    >
      <p
        className={`toggle-button-container__title ${
          title === activeButton && "active-label"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default ToggleButton;
