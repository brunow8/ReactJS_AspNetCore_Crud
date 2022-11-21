import React from "react";

const GoBackArrow = (props) => {
  const GoBack = (data) => {
    if (data === "allPersons") {
      props.allPersons(data);
    }else if(data === "createPerson"){
      props.createPerson(data);
    }else if(data === "viewPerson"){
      props.viewPerson(data);
    }
  };
  return (
    <div className="col-12 d-flex justify-content-start">
      <i
        className="material-icons arrowBack"
        onClick={() => GoBack(props.location)}
      >
        arrow_back_ios
      </i>
    </div>
  );
};

export default GoBackArrow;

/*This arrow receive by parameter her location that can be "EditPerson" or "ViewPerson"
 or "CreatePerson". And the user click it the GoBack function will be activated and will transmit to the parent component the information where
 the arrow is located and move the user to the appropriate previous component. */
