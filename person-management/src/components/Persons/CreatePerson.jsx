import React, { useState } from 'react'
import InputImage from '../Others/InputImage'
import GoBackArrow from '../Shared/GoBackArrow'

const CreatePerson = (props) => {
    const [newPerson, setNewPerson] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        nif: "",
        cellphone: "",
        zipCode: "",
        streetAddress: "",
        email: "",
        photo: "",
    })

    const changePhotoName = (imageName) => {
        setNewPerson((prevState) => {
            return {...prevState, photo: imageName};
        })
    }
  return (
    <>
        <GoBackArrow location={"createPerson"} createPerson={props.GoBack}/>
        <InputImage src={newPerson.photo} changePhotoName={changePhotoName}/>
    </>
  )
}

export default CreatePerson