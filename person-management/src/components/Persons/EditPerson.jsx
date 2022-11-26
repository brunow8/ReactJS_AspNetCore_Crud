import React, { useState } from "react";
import GenderSelectBox from "../Others/GenderSelectBox";
import InputImage from "../Others/InputImage";
import InputText from "../Others/InputText";
import validation from "../Others/Validation";
import GoBackArrow from "../Shared/GoBackArrow";
import style from "./../../css/AllPersons.module.css";
import swal from "sweetalert2";

const CreatePerson = (props) => {
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [personToUpdate, setPersonToUpdate] = useState({
    ...props.personDetails,
  });

  const onHandlerInput = (e) => {
    setPersonToUpdate({
      ...personToUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handlerGender = (gender) => {
    setPersonToUpdate((prevState) => {
      return { ...prevState, gender: gender };
    });
  };

  const onHandlerInputImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].name !== "") {
        let imageFile = e.target.files[0];
        let imageName = e.target.files[0].name;
        const reader = new FileReader();
        reader.onload = (x) => {
          setPersonToUpdate({
            ...personToUpdate,
            imageFile: imageFile,
            imageSrc: x.target.result,
            photo: imageName,
          });
        };
        reader.readAsDataURL(imageFile);
      }
    }
  };

  const changesPersonDetails = (e) => {
    setErrors(validation(personToUpdate));
    if (errors.hasError === false) {
      setLoading(true);
      const formData = new FormData();
      formData.append("id", personToUpdate.id);
      formData.append("firstName", personToUpdate.firstName);
      formData.append("lastName", personToUpdate.lastName);
      formData.append("birthday", personToUpdate.birthday);
      formData.append("gender", personToUpdate.gender);
      formData.append("nif", personToUpdate.nif);
      formData.append("cellphone", personToUpdate.cellphone);
      formData.append("zipcode", personToUpdate.zipcode);
      formData.append("address", personToUpdate.streetAddress);
      formData.append("email", personToUpdate.email);
      formData.append("imageName", personToUpdate.photo);
      formData.append("imageSrc", personToUpdate.imageSrc);
      formData.append("imageFile", personToUpdate.imageFile);
      props
        .personAPI()
        .update(formData)
        .then((res) => {
          if (res.data.error === true) {
            setErrors({
              ...errors,
              [res.data.field]: res.data.message,
            });
          } else {
            swal.fire("Success!", "Person updated with success!", "success");
            props.GoBack("editPerson");
          }
        });
      setLoading(false);
    }

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
        src={props.personDetails.imageSrc}
        changePhotoName={onHandlerInputImage}
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
        handlerGender={handlerGender}
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
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div
            className={`${style.createPersonButton}`}
            onClick={changesPersonDetails}
          >
            Save Changes
          </div>
        )}
      </div>
    </>
  );
};

export default CreatePerson;
