import React from "react";

const ViewPersonsCard = () => {
  return (
    <div
      className="col-12 col-md-6 d-flex justify-content-center"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <div className="cardPerson">
        <div className="icon">
          <span class="material-icons personIcon">people</span>
        </div>
        <p className="title">All Persons</p>
        <p className="text">Click here to view, edit or delete all persons.</p>
      </div>
    </div>
  );
};

export default ViewPersonsCard;
