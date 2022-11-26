import React, { useState, useEffect } from "react";
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
    id: 0,
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    nif: "",
    cellphone: "",
    zipCode: "",
    address: "",
    email: "",
    photo: "",
    imageSrc: "",
    imageFile: null,
  });

  const getPersonDetails = () => {
    props.personAPI().fetchById(props.id).then(res => {
      setPersonToUpdate({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        birthday: res.data.birthday,
        gender: res.data.gender,
        nif: res.data.nif,
        cellphone: res.data.cellphone,
        zipCode: res.data.zipCode,
        address: res.data.address,
        email: res.data.email,
        photo: res.data.imageName,
        imageSrc: res.data.imageSrc,
      });
    });
  }

  useEffect(() => {
    getPersonDetails();
  }, [])
  
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

  const changesPersonDetails = () => {
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
      formData.append("zipcode", personToUpdate.zipCode);
      formData.append("address", personToUpdate.address);
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
            props.GoBack("editPersonSubmit");
          }
        });
      setLoading(false);
    }
  };
  return (
    <>
      <GoBackArrow location={"editPerson"} editPerson={props.GoBack} />
      <InputImage
        src={personToUpdate.imageSrc}
        changePhotoName={onHandlerInputImage}
        errors={errors.photo}
        disabled={false}
      />
      <InputText
        value={personToUpdate.firstName}
        name={"firstName"}
        labelName={"First Name"}
        type={"name"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.firstName}
        placeholder={"Ex: Bruno"}
      />
      <InputText
        value={personToUpdate.lastName}
        name={"lastName"}
        labelName={"Last Name"}
        type={"name"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.lastName}
        placeholder={"Ex: Barbosa"}
      />
      <InputText
        value={personToUpdate.birthday}
        name={"birthday"}
        labelName={"Date of Birth"}
        type={"datetime-local"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.birthday}
        placeholder={""}
      />
      <GenderSelectBox
        gender={personToUpdate.gender}
        handlerGender={handlerGender}
        disabled={false}
        errors={errors.gender}
      />
      <InputText
        value={personToUpdate.nif}
        name={"nif"}
        labelName={"Nif"}
        type={"text"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.nif}
        placeholder={"Ex: 987654321"}
      />
      <InputText
        value={personToUpdate.cellphone}
        name={"cellphone"}
        labelName={"Cellphone"}
        type={"text"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.cellphone}
        placeholder={"Ex: 987654321"}
      />
      <InputText
        value={personToUpdate.address}
        name={"address"}
        labelName={"Street Address"}
        type={"address"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.address}
      />
      <InputText
        value={personToUpdate.zipCode}
        name={"zipCode"}
        labelName={"Zip Code"}
        type={"zip"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.zipCode}
        placeholder={"Ex: 4421-004"}
      />
      <InputText
        value={personToUpdate.email}
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
