import React from "react";
import ToggleButton from "../ToggleButton";
import Header from "../Header";
import TextInput from "../TextInput";

const Form = ({
  activeButton,
  handleToggleButton,
  handleAmount,
  handleInput,
  amount,
  state,
}) => {
  return (
    <div className="form-container">
      <Header title="Place Your Load BID" className="fs-18" />
      <div className="form-container__bid-amount-section">
        <div className="form-container__bid-amount-section__amount">
          <span className="currency">₹</span>
          <input
            type="number"
            placeholder="0"
            value={amount}
            style={{ width: `${30 + String(amount).length * 30}px` }}
            onChange={(e) => handleAmount(e)}
          />
        </div>
      </div>
      <div className="form-container__button-section">
        <div className="form-container__button-section__left">
          <ToggleButton
            title="Fixed Price"
            activeButton={activeButton}
            handleToggleButton={handleToggleButton}
          />
        </div>
        <div className="form-container__button-section__right">
          <ToggleButton
            title="Rate Negotiable"
            activeButton={activeButton}
            handleToggleButton={handleToggleButton}
          />
        </div>
      </div>

      {activeButton !== "" && amount !== "" && (
        <>
          <div className="form-container__border-section"></div>
          <TextInput
            label="Enter your mobile number*"
            type="text"
            name="mobileNumber"
            value={state.mobileNumber}
            callBack={handleInput}
          />
          <div className="form-container__input">
            <TextInput
              label="Enter your name*"
              type="text"
              name="name"
              value={state.name}
              callBack={handleInput}
            />
          </div>
          <div className="form-container__input">
            <TextInput
              label="Enter Remarks (optional)"
              type="text"
              name="remarks"
              value={state.remarks}
              callBack={handleInput}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
