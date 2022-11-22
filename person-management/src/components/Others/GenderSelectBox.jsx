import React from "react";
import style from "./../../css/Input.module.css";

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
      <div className={`${style.colDivGender}`}>
        <div className={`${style.labelDivInputGender}`}>
          <label className={`${style.labelPosition}`}>Gender</label>
        </div>
        <div className={`d-flex justify-content-end ${style.optionsGender}`}>
          <div className="d-flex justify-content-center mt-2">
            <div
              className={`${
                props.gender === "Male"
                  ? style.circleCheck
                  : style.circleNotCheck
              } me-3`}
              style={{ cursor: `${props.disabled ? "" : "pointer"}` }}
              onClick={() => checkCircle("Male")}
            ></div>
            <p className={`${style.genderText}`}>Male</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div
              className={`${
                props.gender === "Female"
                  ? style.circleCheck
                  : style.circleNotCheck
              } me-3`}
              style={{ cursor: `${props.disabled ? "" : "pointer"}` }}
              onClick={() => checkCircle("Female")}
            ></div>
            <p className={`${style.genderText}`}>Female</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div
              className={`${
                props.gender === "Other"
                  ? style.circleCheck
                  : style.circleNotCheck
              } me-3`}
              style={{ cursor: `${props.disabled ? "" : "pointer"}` }}
              onClick={() => checkCircle("Other")}
            ></div>
            <p className={`${style.genderText}`}>Other</p>
          </div>
        </div>
        {props.errors !== "" ? (
          <p className={`${style.errorText}`}>{props.errors}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GenderSelectBox;
