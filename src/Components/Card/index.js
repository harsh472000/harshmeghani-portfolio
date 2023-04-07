import React from "react";
import carProject from "../../Assets/carProject.webp";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Card() {
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      heading: "CAR RENTAL",
      subheading:
        "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      badges: ["React", "Tailwind"],
      links: [
        {
          githubLink: "",
          demoLink: "",
        },
      ],
    },
    {
      heading: "COINDOM 🪙",
      subheading:
        "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      badges: ["React", "Tailwind"],
      links: [
        {
          githubLink: "",
          demoLink: "",
        },
      ],
    },
    {
      heading: "GYMATE 🏋️",
      subheading:
        "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
      badges: ["React", "Tailwind", "Scss"],
      links: [
        {
          githubLink: "",
          demoLink: "",
        },
      ],
    },
  ];
  return (
    <>
      {projects?.map((project, index) => {
        const isImageOnLeft = index % 2 === 0;
        const containerClassName = `cardContainer ${
          isImageOnLeft ? "imageOnLeft" : "imageOnRight"
        }`;
        return (
          <>
            <div
              className={`cardContainer ${containerClassName}`}
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="cardContainer__left">
                <a target="_blank" href="www.link.com">
                  <img src={carProject} alt="projectImg" />
                </a>
              </div>
              <div className="cardContainer__right">
                <HeadingAndSubHeading
                  heading={project.heading}
                  subheading={project.subheading}
                  headingStyle="headingNormal"
                  subheadingStyle="subHeadingBold"
                  center="true"
                  className="cardContainer__right"
                />
                <div className="cardContainer__right__stack">
                  {project?.badges?.map((badge, index) => {
                    return <p>{badge}</p>;
                  })}
                </div>
                <div className="cardContainer__right__links">
                  <a href="www.github.com" target="_blank">
                    code
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="cardContainer__right__links__icon"
                    />
                  </a>
                  <a href="www.github.com" target="_blank">
                    Live Demo
                    <FontAwesomeIcon
                      icon={faLink}
                      size="xl"
                      className="cardContainer__right__links__icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
