import React from "react";
//components
import Navbar from "../Navbar";
import Header from "../Header";
import Card from "../Card";

const Bid = () => {
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
      </div>
    </div>
  );
};

export default Bid;