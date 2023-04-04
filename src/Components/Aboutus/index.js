import React from "react";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";
import "./About.scss";
import wavingHand from "../../Assets/wavingHand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Aboutus() {
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
      <div className="homeContainer">
        <div className="homeContainer__left">
          <HeadingAndSubHeading
            heading="Front-End React Developer"
            subheading="Hi, I'm Harsh Meghani. A passionate Front-end React Developer based in Ahmedabad, Gujarat. 📍"
            headingStyle="headingBold"
            subheadingStyle="subHeadingNormal"
            additionalElement={<img src={wavingHand} alt="img" width="60px" />}
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
    </>
  );
}

export default Aboutus;
