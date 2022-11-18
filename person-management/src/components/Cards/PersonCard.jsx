import React from "react";
import personImage from "./../../images/personImage.jfif";

const PersonCard = () => {
  return (
    <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
      <div className="personCard mt-2">
        <div>
          <div className="d-flex justify-content-center">
            <img
              src={personImage}
              alt="PersonImage"
              className="imagePersonCard"
            />
          </div>
          <div className="d-flex justify-content-center">
            <h4 className="namePersonCard">Bruno</h4>
          </div>
          <div className="d-flex justify-content-center">
            <h4 className="namePersonCard">Barbosa</h4>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <span className="material-icons editButton">edit</span>
            <span className="material-icons deleteButton">delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
