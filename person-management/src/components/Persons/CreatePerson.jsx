import React, { useState, useEffect } from "react";
import GenderSelectBox from "../Others/GenderSelectBox";
import InputImage from "../Others/InputImage";
import InputText from "../Others/InputText";
import validation from "../Others/Validation";
import GoBackArrow from "../Shared/GoBackArrow";
import style from "./../../css/AllPersons.module.css";
import swal from "sweetalert2";

const CreatePerson = (props) => {
  const [newPerson, setNewPerson] = useState({
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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const onHandlerInputImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].name !== "") {
        let imageFile = e.target.files[0];
        let imageName = e.target.files[0].name;
        const reader = new FileReader();
        reader.onload = (x) => {
          setNewPerson({
            ...newPerson,
            imageFile: imageFile,
            imageSrc: x.target.result,
            photo: imageName,
          });
        };
        reader.readAsDataURL(imageFile);
      }
    }
  };

  const handlerGender = (gender) => {
    setNewPerson((prevState) => {
      return { ...prevState, gender: gender };
    });
  };

  const onHandlerInput = (e) => {
    setNewPerson({
      ...newPerson,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
      if (!errors.hasError) {
        setDataIsCorrect(true);
      } else {
        setDataIsCorrect(false);
      }
  }, [errors, newPerson]);

  const submitNewPerson = () => {
    setErrors(validation(newPerson));
    if (dataIsCorrect) {
      setLoading(true);
      const formData = new FormData();
      formData.append("id", newPerson.id);
      formData.append("firstName", newPerson.firstName);
      formData.append("lastName", newPerson.lastName);
      formData.append("birthday", newPerson.birthday);
      formData.append("gender", newPerson.gender);
      formData.append("nif", newPerson.nif);
      formData.append("cellphone", newPerson.cellphone);
      formData.append("zipcode", newPerson.zipCode);
      formData.append("address", newPerson.address);
      formData.append("email", newPerson.email);
      formData.append("imageName", newPerson.photo);
      formData.append("imageSrc", newPerson.imageSrc);
      formData.append("imageFile", newPerson.imageFile);
      props
        .personAPI()
        .create(formData)
        .then((res) => {
          if (res.data.error === true) {
            setErrors({
              [res.data.field]: res.data.message,
            });
          } else {
            setNewPerson({
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
      swal.fire("Success!", "Person created with success!", "success");
      props.GoBack("createPerson");
        }
      });
      setLoading(false);
    }
  };
  return (
    <>
      <GoBackArrow location={"createPerson"} createPerson={props.GoBack} />
      <InputImage
        src={newPerson.imageSrc}
        onHandlerInputImage={onHandlerInputImage}
        errors={errors.photo}
        disabled={false}
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
        type={"datetime-local"}
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
        value={newPerson.address}
        name={"address"}
        labelName={"Street Address"}
        type={"address"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.address}
      />
      <InputText
        value={newPerson.zipCode}
        name={"zipCode"}
        labelName={"Zip Code"}
        type={"zip"}
        disabled={false}
        onHandlerInput={onHandlerInput}
        errors={errors.zipCode}
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
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div
            className={`${style.createPersonButton}`}
            onClick={submitNewPerson}
          >
            Create Person
          </div>
        )}
      </div>
    </>
  );
};

export default CreatePerson;
