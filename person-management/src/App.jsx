import "./App.css";
import React, { useState } from "react";
import CreatePersonCard from "./components/Home/CreatePersonCard";
import ViewPersonsCard from "./components/Home/ViewPersonsCard";
import MainContainer from "./components/Shared/MainContainer";
import AllPersons from "./components/Persons/AllPersons";
import CreatePerson from "./components/Persons/CreatePerson";
import ViewPerson from "./components/Persons/ViewPerson";
import EditPerson from "./components/Persons/EditPerson";
import Swal from "sweetalert2";
import axios from "axios";

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

  const personAPI = (url = "https://localhost:7171/Person") => {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + "/getPersonDetails?personId=" + id),
      create: (newPerson) => axios.post(url + "/createPerson", newPerson),
      update: (updatePerson) => axios.put(url, updatePerson),
      delete: (id) => axios.delete(url + "?personId=" + id),
    };
  };

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
    } else if (data === "editPersonSubmit") {
      setAppSettings((prevState) => {
        return { ...prevState, allPersons: true, editPerson: false };
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
  };

  const personEdit = (person) => {
    setAppSettings((prevState) => {
      return { ...prevState, editPerson: true, allPersons: false };
    });
    setPersonDetails(person);
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
    content = (
      <AllPersons
        GoBack={GoBack}
        personAPI={personAPI}
        personView={personView}
        personEdit={personEdit}
      />
    );
  } else if (appSettings.createPerson) {
    content = <CreatePerson GoBack={GoBack} personAPI={personAPI} />;
  } else if (appSettings.viewPerson) {
    content = <ViewPerson GoBack={GoBack} personDetails={personDetails} />;
  } else if (appSettings.editPerson) {
    content = (
      <EditPerson
        GoBack={GoBack}
        id={personDetails.id}
        personAPI={personAPI}
      />
    );
  }

  return (
    <div className="MainApp">
      <MainContainer HomePage={appSettings.homePage}>{content}</MainContainer>
    </div>
  );
};

export default App;
