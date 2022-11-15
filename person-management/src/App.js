import "./App.css";
import CreatePersonCard from "./components/Cards/CreatePersonCard";
import ViewPersonsCard from "./components/Cards/ViewPersonsCard";

function App() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <ViewPersonsCard />
          <CreatePersonCard />
        </div>
      </div>
    </div>
  );
}

export default App;
