import "./App.css";
import React, { useState } from "react";
import CreatePersonCard from "./components/Home/CreatePersonCard";
import ViewPersonsCard from "./components/Home/ViewPersonsCard";
import MainContainer from "./components/Shared/MainContainer";
import AllPersons from "./components/Persons/AllPersons";
import CreatePerson from "./components/Persons/CreatePerson";
import ViewPerson from "./components/Persons/ViewPerson";
import EditPerson from "./components/Persons/EditPerson";
import Swal from 'sweetalert2';

const App = () => {

  //Object that will be used to know where the user is located in the app and to move him across her
  const [appSettings, setAppSettings] = useState({
    homePage: true,
    allPersons: false,
    createPerson: false,
    viewPerson: false,
    editPerson: false,
  });

  const [personDetails, setPersonDetails] = useState({});
  const [initialPersons, setInitialPersons] = useState([
    {
      id: "1",
      firstName: "Bruno",
      lastName: "Barbosa",
      birthday: "1999-03-13",
      gender: "Male",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
    {
      id: "2",
      firstName: "Tiago",
      lastName: "Silva",
      birthday: "1999-03-13",
      gender: "Male",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
    {
      id: "3",
      firstName: "Catarina",
      lastName: "Rodrigues",
      birthday: "1999-03-13",
      gender: "Female",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
    {
      id: "4",
      firstName: "Silvía",
      lastName: "Campos",
      birthday: "1999-03-13",
      gender: "Other",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
  ]);
  //Function that will receive the location of the user in the application and that 
  //will close that respective component and change it to the home page
  const GoBack = (data) => {
    if (data === "allPersons") {
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: false, homePage: true };
      });
    } else if (data === "createPerson") {
      setAppSettings((prevState) => {
        return { ...prevState, createPerson: false, homePage: true };
      });
    } else if (data === "editPerson") {
      Swal.fire({
        title: "Are you sure you want to close?",
        text: "Any change made it won't be saved!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DB4E4E",
        cancelButtonColor: "#898282",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          setAppSettings((prevState) => {
            return { ...prevState, allPersons: true, editPerson: false };
          });
        }
      });
    } else if (data === "viewPerson") {
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: true, viewPerson: false };
      });
    }
  };

  //Function that will receive the location the user wants to go in the application and that 
  //will close that homePage component and change it to the location the user wants
  const GoTo = (data) => {
    if (data === "allPersons") {
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: true, homePage: false };
      });
    } else if (data === "createPerson") {
      setAppSettings((prevState) => {
        return { ...prevState, createPerson: true, homePage: false };
      });
    }
  };

  const personView = (person) => {
    setAppSettings((prevState) => {
      return { ...prevState, viewPerson: true, allPersons: false };
    });
    setPersonDetails(person);
  }

  const personEdit = (person) => {
    setAppSettings((prevState) => {
      return { ...prevState, editPerson: true, allPersons: false };
    });
    setPersonDetails(person);
  }

  const onHandlerInput = (value, input) => {
    if (input === "firstName") {
      setPersonDetails((prevState) => {
        return { ...prevState, firstName: value };
      });
    } else if (input === "lastName") {
      setPersonDetails((prevState) => {
        return { ...prevState, lastName: value };
      });
    } else if (input === "birthday") {
      setPersonDetails((prevState) => {
        return { ...prevState, birthday: value };
      });
    } else if (input === "nif") {
      setPersonDetails((prevState) => {
        return { ...prevState, nif: value };
      });
    } else if (input === "cellphone") {
      setPersonDetails((prevState) => {
        return { ...prevState, cellphone: value };
      });
    } else if (input === "zipcode") {
      setPersonDetails((prevState) => {
        return { ...prevState, zipcode: value };
      });
    } else if (input === "streetAddress") {
      setPersonDetails((prevState) => {
        return { ...prevState, streetAddress: value };
      });
    } else if (input === "email") {
      setPersonDetails((prevState) => {
        return { ...prevState, email: value };
      });
    } else if (input === "photo") {
      setPersonDetails((prevState) => {
        return { ...prevState, photo: value };
      });
    } else if (input === "gender") {
      setPersonDetails((prevState) => {
        return { ...prevState, gender: value };
      });
    }
  };

  //Simple validation to show the correct HTML of the component the user is.
  let content = "";
  if (appSettings.homePage) {
    content = (
      <>
        <ViewPersonsCard GoTo={GoTo} />
        <CreatePersonCard GoTo={GoTo} />
      </>
    );
  } else if (appSettings.allPersons) {
    content = <AllPersons GoBack={GoBack} initialPersons={initialPersons} personView={personView} personEdit={personEdit} />;
  } else if (appSettings.createPerson) {
    content = <CreatePerson GoBack={GoBack} />;
  } else if (appSettings.viewPerson) {
    content = <ViewPerson GoBack={GoBack} personDetails={personDetails} />
  } else if (appSettings.editPerson) {
    content = <EditPerson GoBack={GoBack} personDetails={personDetails} onHandlerInputText={onHandlerInput} />
  }

  return (
    <div className="MainApp">
      <MainContainer HomePage={appSettings.homePage}>{content}</MainContainer>
    </div>
  );
};

export default App;
