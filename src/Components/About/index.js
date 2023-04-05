import React from "react";
import emoji from "../../Assets/emoji.png";
import laptop from "../../Assets/laptop.jpg";
import frontend from "../../Assets/frontend.svg";
import "./About.scss";
import Heading from "../Elements/Heading";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";

function About() {
  return (
    <>
      <div className="container">
        <div className="aboutContainer">
          <div className="aboutContainer__left">
            <img src={emoji} alt="" className="aboutContainer__left__emoji" />
            <img
              src={laptop}
              alt=""
              className="aboutContainer__left__laptopimg"
            />
            <span>
              <img
                src={frontend}
                alt=""
                className="aboutContainer__left__textimg"
              />
            </span>
          </div>
          <div className="aboutContainer__right">
            <Heading title="ABOUT" />
            <HeadingAndSubHeading
              heading="A dedicated Front-end Developer based in Gujarat, Ahmedabad 📍"
              subheading="As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."
              headingStyle="headingNormal"
              subheadingStyle="subHeadingNormal"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
