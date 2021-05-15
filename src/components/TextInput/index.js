import React from "react";

const TextInput = ({ label, type, name, callBack, value }) => {
  return (
    <div className="input-container">
      <input
        id={name}
        name={name}
        type={type}
        placeholder=" "
        value={value}
        onChange={(e) => callBack(e)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default TextInput;
