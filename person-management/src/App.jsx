import "./App.css";
import React, { useState } from "react";
import CreatePersonCard from "./components/Home/CreatePersonCard";
import ViewPersonsCard from "./components/Home/ViewPersonsCard";
import MainContainer from "./components/Shared/MainContainer";
import AllPersons from "./components/Persons/AllPersons";
import CreatePerson from "./components/Persons/CreatePerson";

const App = () => {

  //Object that will be used to know where the user is located in the app and to move him across her
  const [appSettings, setAppSettings] = useState({
    homePage: true,
    allPersons: false,
    createPerson: false,
  });

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
    content = <AllPersons GoBack={GoBack} />;
  } else if (appSettings.createPerson) {
    content = <CreatePerson GoBack={GoBack} />;
  }

  return (
    <div className="MainApp">
      <MainContainer HomePage={appSettings.homePage}>{content}</MainContainer>
    </div>
  );
};

export default App;
