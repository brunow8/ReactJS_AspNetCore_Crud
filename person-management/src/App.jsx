import "./App.css";
import React, { useState } from "react";
import CreatePersonCard from "./components/Home/CreatePersonCard";
import ViewPersonsCard from "./components/Home/ViewPersonsCard";
import MainContainer from "./components/Shared/MainContainer";
import AllPersons from "./components/Persons/AllPersons";
import CreatePerson from "./components/Persons/CreatePerson";
import ViewPerson from "./components/Persons/ViewPerson";

const App = () => {

  //Object that will be used to know where the user is located in the app and to move him across her
  const [appSettings, setAppSettings] = useState({
    homePage: true,
    allPersons: false,
    createPerson: false,
    viewPerson: false,
    editPerson: false,
  });

  const [personToView, setPersonToView] = useState({});
  const [initialPersons, setInitialPersons] = useState([
    {
      id: "1",
      firstName: "Bruno",
      lastName: "Barbosa",
      birthday: "13/03/1999",
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
      birthday: "13/03/1999",
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
      birthday: "13/03/1999",
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
      birthday: "13/03/1999",
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
    if(data === "allPersons"){
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: false, homePage: true };
      });
    }else if(data === "createPerson"){
      setAppSettings((prevState) => {
        return { ...prevState, createPerson: false, homePage: true };
      });
    }else if(data === "viewPerson"){
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: true, viewPerson: false };
      });
    }
  };

  //Function that will receive the location the user wants to go in the application and that 
  //will close that homePage component and change it to the location the user wants
  const GoTo = (data) => {
    if(data === "allPersons"){
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: true, homePage: false };
      });
    }else if(data === "createPerson"){
      setAppSettings((prevState) => {
        return { ...prevState, createPerson: true, homePage: false };
      });
    }
  };

  const personView = (person) => {
    setAppSettings((prevState) => {
      return { ...prevState, viewPerson: true, allPersons: false };
    });
    setPersonToView(person);
  }

  //Simple validation to show the correct HTML of the component the user is.
  let content = "";
  if (appSettings.homePage) {
    content = (
      <>
        <ViewPersonsCard GoTo={GoTo}/>
        <CreatePersonCard GoTo={GoTo}/>
      </>
    );
  } else if (appSettings.allPersons) {
    content = <AllPersons GoBack={GoBack} initialPersons={initialPersons} personView={personView} />;
  } else if (appSettings.createPerson) {
    content = <CreatePerson GoBack={GoBack} />;
  } else if(appSettings.viewPerson){
    content = <ViewPerson GoBack={GoBack} personDetails={personToView}/>
  }

  return (
    <div className="MainApp">
      <MainContainer HomePage={appSettings.homePage}>{content}</MainContainer>
    </div>
  );
};

export default App;
