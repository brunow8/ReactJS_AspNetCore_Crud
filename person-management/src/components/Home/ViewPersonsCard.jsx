import React from "react";

const ViewPersonsCard = (props) => {
  const GoTo = (data) => {
    props.GoTo(data);
  }
  return (
    <div
      className="col-12 col-md-6 d-flex justify-content-center"
      style={{ height: "100vh", alignItems: "center" }}
      
    >
      <div className="cardPerson" onClick={() => GoTo("allPersons")}>
        <div className="icon">
          <span className="material-icons personIcon">people</span>
        </div>
        <p className="title">All Persons</p>
        <p className="text">Click here to view, edit or delete all persons.</p>
      </div>
    </div>
  );
};

export default ViewPersonsCard;
