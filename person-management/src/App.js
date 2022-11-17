import "./App.css";
import CreatePersonCard from "./components/Home/CreatePersonCard";
import ViewPersonsCard from "./components/Home/ViewPersonsCard";
import MainContainer from "./components/Shared/MainContainer";

function App() {
  return (
    <div className="MainApp">
      <MainContainer>
        <ViewPersonsCard />
        <CreatePersonCard />
      </MainContainer>
    </div>
  );
}

export default App;
