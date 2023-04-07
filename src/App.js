import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contanct";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <section className="home" id="Home">
        <Home />
      </section>
      <section
        className="about"
        id="About"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <About />
      </section>
      <section className="projects" id="Project">
        <Projects />
      </section>
      <section className="experience" id="Experience">
        <Experience />
      </section>
      <section className="contact" id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
