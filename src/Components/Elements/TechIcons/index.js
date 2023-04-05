import React from "react";
import Html from "../../../Assets/html.svg";
import Css from "../../../Assets/css.svg";
import Javascript from "../../../Assets/javaScript.svg";
import Reactsvg from "../../../Assets/react.svg";
import Tailwind from "../../../Assets/tailwind.svg";
import Sass from "../../../Assets/sass.svg";
import "./TechIcons.scss";

function TechIcons() {
  return (
    <>
      <div className="skills">
        <p>Tech Stack</p>
        <div className="skills__logos">
          <ul>
            <li>
              <img src={Html} alt="html" />
            </li>
            <li>
              <img src={Css} alt="html" />
            </li>
            <li>
              <img src={Javascript} alt="html" />
            </li>
            <li>
              <img src={Reactsvg} alt="html" />
            </li>
            <li>
              <img src={Tailwind} alt="html" />
            </li>
            <li>
              <img src={Sass} alt="html" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TechIcons;
