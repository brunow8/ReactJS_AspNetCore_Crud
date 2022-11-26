import React from "react";
import GenderSelectBox from "../Others/GenderSelectBox";
import InputImage from "../Others/InputImage";
import InputText from "../Others/InputText";
import GoBackArrow from "../Shared/GoBackArrow";
const ViewPerson = (props) => {
  return (
    <>
      <GoBackArrow location={"viewPerson"} viewPerson={props.GoBack} />
      <InputImage src={props.personDetails.imageSrc} disabled={true}/>
      <InputText
        name={"firstName"}
        value={props.personDetails.firstName}
        labelName={"First Name"}
        disabled={true}
      />
      <InputText
        name={"lastName"}
        value={props.personDetails.lastName}
        labelName={"Last Name"}
        type={"name"}
        disabled={true}
      />
      <InputText
        name={"birthday"}
        value={props.personDetails.birthday}
        labelName={"Date of Birth"}
        type={"text"}
        disabled={true}
      />
      <GenderSelectBox gender={props.personDetails.gender} disabled={true} />
      <InputText
        name={"nif"}
        value={props.personDetails.nif}
        labelName={"Nif"}
        type={"text"}
        disabled={true}
      />
      <InputText
        value={props.personDetails.cellphone}
        name={"cellphone"}
        labelName={"Cellphone"}
        type={"text"}
        disabled={true}
      />
      <InputText
        value={props.personDetails.address}
        name={"streetAddress"}
        labelName={"Street Address"}
        type={"address"}
        disabled={true}
      />
      <InputText
        value={props.personDetails.zipCode}
        name={"zipcode"}
        labelName={"Zip Code"}
        type={"zip"}
        disabled={true}
      />
      <InputText
        value={props.personDetails.email}
        name={"email"}
        labelName={"Email"}
        type={"email"}
        disabled={true}
      />
    </>
  );
};

export default ViewPerson;
