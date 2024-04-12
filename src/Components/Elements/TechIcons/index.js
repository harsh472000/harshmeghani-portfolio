import React from "react";
import Html from "../../../Assets/html.svg";
import Css from "../../../Assets/css.svg";
import Javascript from "../../../Assets/javaScript.svg";
import Reactsvg from "../../../Assets/react.svg";
import Tailwind from "../../../Assets/tailwind.svg";
import Sass from "../../../Assets/sass.svg";
import Nextjs from "../../../Assets/nextjs-icon.svg";
import Typescript from "../../../Assets/typescript.svg";

import "./TechIcons.scss";

function TechIcons() {
  const icons = [
    { src: Html, alt: "HTML" },
    { src: Css, alt: "CSS" },
    { src: Javascript, alt: "JavaScript" },
    { src: Reactsvg, alt: "React" },
    { src: Nextjs, alt: "Nextjs" },
    { src: Typescript, alt: "Typescript" },
    { src: Tailwind, alt: "Tailwind CSS" },
    { src: Sass, alt: "Sass" },
  ];
  return (
    <>
      <div className="skills">
      <p>Tech Stack</p>
      <div className="skills__logos">
        <ul>
          {icons.map((icon, index) => (
            <li key={index}>
              <img src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default TechIcons;
