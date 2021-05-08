import React, { useState } from "react";
//components
import CardHeader from "./CardHeader";
//images
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Transport } from "../../assets/transport.svg";
import { ReactComponent as Payment } from "../../assets/payment.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
const Card = () => {
  const [showDetails, setShowDetails] = useState(true);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="card-container">
      <CardHeader />
      <div className="card-container__info">
        <div className="card-container__info__specifications">
          <div className="card-container__info__specifications__list">
            <div className="card-container__info__specifications__list__icon">
              <Info />
            </div>
            <h4 className="card-container__info__specifications__list__info">
              Specification 01
            </h4>
          </div>
          <div className="card-container__info__specifications__list">
            <div className="card-container__info__specifications__list__icon">
              <Transport />
            </div>
            <h4 className="card-container__info__specifications__list__info">
              Specification 02
            </h4>
          </div>
          <div className="card-container__info__specifications__list">
            <div className="card-container__info__specifications__list__icon">
              <Payment />
            </div>
            <h4 className="card-container__info__specifications__list__info">
              Specification 03
            </h4>
          </div>
        </div>
        <p className="card-container__info__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div
        className={`card-container__${
          showDetails ? "hide-details" : "show-details"
        }`}
        onClick={handleShowDetails}
      >
        <p
          className={`card-container__${
            showDetails ? "hide-details" : "show-details"
          }__label`}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </p>
        <div
          className={`card-container__${
            showDetails ? "hide-details" : "show-details"
          }__icon`}
        >
          <Arrow />
        </div>
      </div>
      <div
        className={`card-container__person-details ${!showDetails && "d-none"}`}
      >
        <div className="card-container__person-details__avatar">
          <i className="far fa-user-circle fa-6x"></i>
        </div>
        <div className="card-container__person-details__info">
          <h2 className="card-container__person-details__info__name">
            Rohan Sharma
          </h2>
          <p className="card-container__person-details__info__location">
            Bengaluru, Karnataka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
