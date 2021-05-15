import React from "react";

const PersonalDetails = () => {
  return (
    <div className={"card-container__person-details"}>
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
  );
};

export default PersonalDetails;
