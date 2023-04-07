import React from "react";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";
import "./Home.scss";
import wavingHand from "../../Assets/wavingHand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import TechIcons from "../Elements/TechIcons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const icons = [
    {
      name: "GitHub",
      href: "#",
      icon: <FontAwesomeIcon icon={faGithub} size="2xl" />,
    },
    {
      name: "LinkedIn",
      href: "#",
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
