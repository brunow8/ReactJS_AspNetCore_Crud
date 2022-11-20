import React from "react";

const InputText = (props) => {
  let inputCol = "";
  let divSize = "normalDiv";
  let labelSize = "140px";
  if (props.name === "email") {
    inputCol = "";
    labelSize = "50px";
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
    if (!props.disabled) props.onHandlerInput(e.target.value, props.name);
  };

  return (
    <div className={`col-12 ${inputCol} d-flex justify-content-center`}>
      <div className= {`${divSize}`}>
        <div className="labelDivInput" style={{ width: `${labelSize}` }}>
          <label className="labelPosition">{props.labelName}</label>
        </div>
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={onHandlerInput}
          className="inputText"
          disabled={props.disabled}
          placeholder={props.placeholder}
        />
        {props.errors !== "" ? <p className="errorText">{props.errors}</p> : ""}
      </div>
    </div>
  );
};

export default InputText;
