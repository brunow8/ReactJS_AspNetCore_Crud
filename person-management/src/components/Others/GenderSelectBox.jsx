import React from "react";

const GenderSelectBox = (props) => {
  const checkCircle = (gender) => {
    if (!props.disabled) {
      if (gender === "Male") {
        props.handlerGender("Male");
      } else if (gender === "Female") {
        props.handlerGender("Female");
      } else if (gender === "Other") {
        props.handlerGender("Other");
      }
    }
  };

  return (
    <div className={`col-12 col-md-6 d-flex justify-content-center`}>
      <div style={{ width: "90%" }}>
        <div className="labelDivInput" style={{ width: "70px" }}>
          <label className="labelPosition">Gender</label>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ borderTop: "1px solid #d9d9d9", borderRadius: "10px", height: "38px" }}
        >
          <div className="d-flex justify-content-center mt-2">
            <div
              className={`${
                props.gender === "Male" ? "circleCheck" : "circleNotCheck"
              } me-3`}
              style={{ cursor: `${props.disabled ? "" : "pointer"}` }}
              onClick={() => checkCircle("Male")}
            ></div>
            <p className="genderText">Male</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div
              className={`${
                props.gender === "Female" ? "circleCheck" : "circleNotCheck"
              } me-3`}
              style={{ cursor: `${props.disabled ? "" : "pointer"}` }}
              onClick={() => checkCircle("Female")}
            ></div>
            <p className="genderText">Female</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div
              className={`${
                props.gender === "Other" ? "circleCheck" : "circleNotCheck"
              } me-3`}
              style={{ cursor: `${props.disabled ? "" : "pointer"}` }}
              onClick={() => checkCircle("Other")}
            ></div>
            <p className="genderText">Other</p>
          </div>
        </div>
        {props.errors !== "" ? <p className="errorText">{props.errors}</p> : ""}
      </div>
    </div>
  );
};

export default GenderSelectBox;
