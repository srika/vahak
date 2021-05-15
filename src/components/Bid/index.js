import React, { useState } from "react";
//components
import Navbar from "../Navbar";
import Header from "../Header";
import Card from "../Card";
import Form from "../Form";
import Button from "../Button";

const Bid = () => {
  const [activeButton, setActiveButton] = useState("");
  const [amount, setAmount] = useState("");
  const [state, setState] = useState({
    mobileNumber: "",
    name: "",
    remarks: "",
  });
  const handleToggleButton = (title) => {
    setActiveButton(title);
  };
  const handleAmount = (e) => setAmount(e.target.value);

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const enableButton = () => {
    let enable = false;
    const { mobileNumber, name } = state;
    if (amount === "") enable = true;
    else {
      if (amount !== "") {
        if (mobileNumber === "" || name === "" || activeButton === "")
          enable = true;
      }
    }

    return enable;
  };

  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className="bid-container">
      <Navbar />
      <div className="bid-container__content">
        <div className="bid-container__content__header">
          <Header title="Old Car Available" />
        </div>
        <div className="bid-container__content__card">
          <Card />
        </div>
        <div className="bid-container__content__form">
          <Form
            activeButton={activeButton}
            handleToggleButton={handleToggleButton}
            handleAmount={handleAmount}
            handleInput={handleInput}
            amount={amount}
            state={state}
          />
        </div>
        <div className="bid-container__content__button">
          <Button
            title="Bid Now"
            disable={enableButton()}
            callBack={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Bid;
