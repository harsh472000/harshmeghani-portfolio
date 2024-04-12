import React from "react";
import personalPort from "../../Assets/personalport.png";
import borcelloAdmin from "../../Assets/Borcello_Admin.png";
import borcelloStore from "../../Assets/borcello_store.png";
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
      heading: "Borcello Admin",
      subheading:
        "Designed and implemented a comprehensive Bocello admin dashboard with features for managing products, collections, and orders, alongside interactive charts and customer data visualization..",
      badges: ["Nextjs", "Tailwind","MonogDb"],
      links: [
        {
          githubLink: "https://github.com/harsh472000/barcello_admin",
          demoLink: "https://barcello-admin-a4ao.vercel.app/",
        },
      ],
      image: borcelloAdmin
    },
    {
      heading: "Bocello Fashion Store",
      subheading:
        "Designed and developed a fully functional fashion store ecommerce website, enabling users to browse and purchase products seamlessly. Integrated Stripe payment gateway for secure and efficient online transactions.",
      badges: ["Nextjs", "Tailwind","MongoDB"],
      links: [
        {
          githubLink: "https://github.com/harsh472000/fashion_store",
          demoLink: "fashion-store-seven-alpha.vercel.app",
        },
      ],
      image: borcelloStore
    },
    {
      heading: "Personal Portfolio",
      subheading:
        "Developed a sleek and professional personal portfolio website using React and SCSS, adhering to industry best practices and new coding standards. Implemented a clean and modern design to showcase skills, projects, and achievements effectively",
      badges: ["React", "Scss"],
      links: [
        {
          githubLink: "https://github.com/harsh472000/harshmeghani-portfolio",
          demoLink: "https://harshmeghani.netlify.app/",
        },
      ],
      image: personalPort
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
                  <img src={project.image} alt="projectImg" />
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
                  <a href={project.links[0].githubLink} target="_blank"  rel="noreferrer">
                    code
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="cardContainer__right__links__icon"
                    />
                  </a>
                  <a href={project.links[0].demoLink} target="_blank">
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
