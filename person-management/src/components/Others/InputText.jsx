import React from "react";
import style from "./../../css/Input.module.css";

const InputText = (props) => {
  let inputCol = "";
  let divSize = "normalDiv";
  let labelSize = "140px";
  if (props.name === "email") {
    inputCol = "";
    divSize = "emailDiv";
  } else if (props.name === "streetAddress") {
    inputCol = "col-md-8";
    divSize = "streetAdressDiv";
  } else if (props.name === "zipcode") {
    inputCol = "col-md-4";
    divSize = "zipCodeDiv";
  } else {
    inputCol = "col-md-6";
  }

  const onHandlerInput = (e) => {
    if (!props.disabled) props.onHandlerInput(e);
  };

  return (
    <div className={`col-12 ${inputCol} d-flex justify-content-center`}>
      <div className= {`${divSize}`}>
        <div className={`${style.labelDivInput}`} style={{ width: `${labelSize}` }}>
          <label className={`${style.labelPosition}`}>{props.labelName}</label>
        </div>
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={onHandlerInput}
          className={`${style.inputText}`}
          disabled={props.disabled}
          placeholder={props.placeholder}
        />
        {props.errors !== "" ? <p className={`${style.errorText}`}>{props.errors}</p> : ""}
      </div>
    </div>
  );
};

export default InputText;
