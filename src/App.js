import "./App.scss";
import Navbar from "./Components/Navbar";
import Aboutus from "./Components/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <div className="MainContainer">
        <Aboutus />
      </div>
    </>
  );
}

export default App;
