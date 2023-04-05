import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <section className="home">
        <Home />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;
