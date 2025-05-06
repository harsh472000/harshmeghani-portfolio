import React from "react";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";
import "./Home.scss";
import wavingHand from "../../Assets/wavingHand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import TechIcons from "../Elements/TechIcons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Button from "../Elements/Button";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const icons = [
    {
      name: "GitHub",
      href: "https://github.com/harsh472000",
      icon: <FontAwesomeIcon icon={faGithub} size="2xl" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-meghani",
      icon: <FontAwesomeIcon icon={faLinkedin} size="2xl" />,
    },
  ];
  return (
    <>
      <div className="container" data-aos="zoom-in" data-aos-duration="1000">
        <div className="homeContainer">
          <div className="homeContainer__left">
            <HeadingAndSubHeading
              heading="Front-End React Developer"
              subheading="Hi, I'm Harsh Meghani. A passionate Front-end React Developer based in Ahmedabad, Gujarat. 📍"
              headingStyle="headingBold"
              subheadingStyle="subHeadingNormal"
              additionalElement={
                <img src={wavingHand} alt="img" width="60px" />
              }
            />
            <div className="homeContainer__left__wrapper">
              {icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="homeContainer__left__wrapper__icons"
                >
                  {icon.icon}
                </a>
              ))}
              <div className="homeContainer__left__buttons">
                <Button
                  text="Resume"
                  href="https://drive.google.com/file/d/1r9zPtYNwNdrn3JADon2napA5yGwuqlSL/view?usp=sharing"
                  icon={<FontAwesomeIcon icon={faDownload} />}  
                />
              </div>
            </div>
          </div>
          <div className="homeContainer__right">
            <div className="homeContainer__right__img"></div>
          </div>
        </div>
        <TechIcons />
      </div>
    </>
  );
}

export default Home;
