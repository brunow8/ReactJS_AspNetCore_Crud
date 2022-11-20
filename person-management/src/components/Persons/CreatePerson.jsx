import React, { useState } from "react";
import GenderSelectBox from "../Others/GenderSelectBox";
import InputImage from "../Others/InputImage";
import InputText from "../Others/InputText";
import validation from "../Others/Validation";
import GoBackArrow from "../Shared/GoBackArrow";

const CreatePerson = (props) => {
  const [newPerson, setNewPerson] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    nif: "",
    cellphone: "",
    zipcode: "",
    streetAddress: "",
    email: "",
    photo: "",
  });
  const [errors, setErrors] = useState({});

  const changePhotoName = (imageName) => {
    setNewPerson((prevState) => {
      return { ...prevState, photo: imageName };
    });
  };

  const handlerGender = (gender) => {
    setNewPerson((prevState) => {
      return { ...prevState, gender: gender };
    });
  };

  const onHandlerInput = (value, input) => {
    if (input === "firstName") {
      setNewPerson((prevState) => {
        return { ...prevState, firstName: value };
      });
    } else if (input === "lastName") {
      setNewPerson((prevState) => {
        return { ...prevState, lastName: value };
      });
    } else if (input === "birthday") {
      setNewPerson((prevState) => {
        return { ...prevState, birthday: value };
      });
    } else if (input === "nif") {
      setNewPerson((prevState) => {
        return { ...prevState, nif: value };
      });
    } else if (input === "cellphone") {
      setNewPerson((prevState) => {
        return { ...prevState, cellphone: value };
      });
    } else if (input === "zipcode") {
      setNewPerson((prevState) => {
        return { ...prevState, zipcode: value };
      });
    } else if (input === "streetAddress") {
      setNewPerson((prevState) => {
        return { ...prevState, streetAddress: value };
      });
    } else if (input === "email") {
      setNewPerson((prevState) => {
        return { ...prevState, email: value };
      });
    }
  };

  const submitNewPerson = (e) => {
    e.preventDefault();
    setErrors(validation(newPerson));
    if (errors.hasError === false) {
      console.log("Person created with success!");
      setNewPerson({
        firstName: "",
        lastName: "",
        birthday: "",
        gender: "",
        nif: "",
        cellphone: "",
        zipcode: "",
        streetAddress: "",
        email: "",
        photo: "",
      });
    } else {
      console.log("You have errors!");
    }
  };
  return (
    <>
      <GoBackArrow location={"createPerson"} createPerson={props.GoBack} />
      <InputImage
        src={newPerson.photo}
        changePhotoName={changePhotoName}
        errors={errors.photo}
      />
      <InputText
        value={newPerson.firstName}
        name={"firstName"}
        labelName={"First Name"}
        type={"name"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.firstName}
        placeholder={"Ex: Bruno"}
      />
      <InputText
        value={newPerson.lastName}
        name={"lastName"}
        labelName={"Last Name"}
        type={"name"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.lastName}
        placeholder={"Ex: Barbosa"}
      />
      <InputText
        value={newPerson.birthday}
        name={"birthday"}
        labelName={"Date of Birth"}
        type={"date"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.birthday}
        placeholder={""}

      />
      <GenderSelectBox
        gender={newPerson.gender}
        handlerGender={handlerGender}
        disabled={false}
        errors={errors.gender}
      />
      <InputText
        value={newPerson.nif}
        name={"nif"}
        labelName={"Nif"}
        type={"text"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.nif}
        placeholder={"Ex: 987654321"}
      />
      <InputText
        value={newPerson.cellphone}
        name={"cellphone"}
        labelName={"Cellphone"}
        type={"text"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.cellphone}
        placeholder={"Ex: 987654321"}
      />
      <InputText
        value={newPerson.streetAddress}
        name={"streetAddress"}
        labelName={"Street Address"}
        type={"address"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.streetAddress}
      />
      <InputText
        value={newPerson.zipcode}
        name={"zipcode"}
        labelName={"Zip Code"}
        type={"zip"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.zipcode}
        placeholder={"Ex: 4421-004"}
      />
      <InputText
        value={newPerson.email}
        name={"email"}
        labelName={"Email"}
        type={"email"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.email}
        placeholder={"Ex: example@gmail.com"}
      />
      <div className="col-12 d-flex justify-content-center">
        <div className="createPersonButton" onClick={submitNewPerson}>
          Create Person
        </div>
      </div>
    </>
  );
};

export default CreatePerson;
