import React from "react";

const CreatePersonCard = () => {
  return (
    <div className="col-12 col-md-6 d-flex justify-content-center" style={{height: "100vh", alignItems: "center"}}>
        <div className="cardPerson">
        <div className="icon">
            <span class="material-icons personIcon">person_add</span>
        </div>
        <p className="title">Create Person</p>
        <p className="text">Click here to add a new person.</p>
      </div>
    </div>
  );
};

export default CreatePersonCard;
