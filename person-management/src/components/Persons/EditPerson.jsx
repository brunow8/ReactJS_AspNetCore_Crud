import React, { useState } from "react";
import GenderSelectBox from "../Others/GenderSelectBox";
import InputImage from "../Others/InputImage";
import InputText from "../Others/InputText";
import validation from "../Others/Validation";
import GoBackArrow from "../Shared/GoBackArrow";
import style from './../../css/AllPersons.module.css';
import swal from 'sweetalert2';
const CreatePerson = (props) => {
  const [errors, setErrors] = useState({});

  const onHandlerInput = (value, input) => {
    props.onHandlerInputText(value, input);
  };

  const changesPersonDetails = (e) => {
    e.preventDefault();
    setErrors(validation(props.personDetails));
    if (errors.hasError === false) {
      //API CALL TO ADD THE NEW PERSON TO THE DATABASE 
      
      props.GoBack("editPerson");
      swal.fire("Success!", "Person details changed with success!", "success");

    } else {
      //DISPLAY ERRORS TO THE USER AND PERSON NOT CREATED
      console.log("You have errors!");
    }
  };
  return (
    <>
      <GoBackArrow location={"editPerson"} editPerson={props.GoBack} />
      <InputImage
        src={props.personDetails.photo}
        changePhotoName={onHandlerInput}
        errors={errors.photo}
        disabled={false}
      />
      <InputText
        value={props.personDetails.firstName}
        name={"firstName"}
        labelName={"First Name"}
        type={"name"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.firstName}
        placeholder={"Ex: Bruno"}
      />
      <InputText
        value={props.personDetails.lastName}
        name={"lastName"}
        labelName={"Last Name"}
        type={"name"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.lastName}
        placeholder={"Ex: Barbosa"}
      />
      <InputText
        value={props.personDetails.birthday.replace("/", "-")}
        name={"birthday"}
        labelName={"Date of Birth"}
        type={"date"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.birthday}
        placeholder={""}

      />
      <GenderSelectBox
        gender={props.personDetails.gender}
        handlerGender={onHandlerInput}
        disabled={false}
        errors={errors.gender}
      />
      <InputText
        value={props.personDetails.nif}
        name={"nif"}
        labelName={"Nif"}
        type={"text"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.nif}
        placeholder={"Ex: 987654321"}
      />
      <InputText
        value={props.personDetails.cellphone}
        name={"cellphone"}
        labelName={"Cellphone"}
        type={"text"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.cellphone}
        placeholder={"Ex: 987654321"}
      />
      <InputText
        value={props.personDetails.streetAddress}
        name={"streetAddress"}
        labelName={"Street Address"}
        type={"address"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.streetAddress}
      />
      <InputText
        value={props.personDetails.zipcode}
        name={"zipcode"}
        labelName={"Zip Code"}
        type={"zip"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.zipcode}
        placeholder={"Ex: 4421-004"}
      />
      <InputText
        value={props.personDetails.email}
        name={"email"}
        labelName={"Email"}
        type={"email"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.email}
        placeholder={"Ex: example@gmail.com"}
      />
      <div className="col-12 d-flex justify-content-center">
        <div className={`${style.createPersonButton}`} onClick={changesPersonDetails}>
          Save Changes
        </div>
      </div>
    </>
  );
};

export default CreatePerson;
