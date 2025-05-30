import React from "react";
import Heading from "../Elements/Heading";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";
import Timelines from "../Timelines";
import "./Experience.scss";

function Experience() {
  const works = [
    {
      designation: "Frontend Developer",
      company: "Cloudairy",
      badge: "March 2025 - Present",
      present: true,
      li: [
        "Engineered advanced diagramming features such as table nodes, 3D shape makers, and chart nodes using React Flow, significantly enhancing the visual editing experience.",
        "Designed and implemented modular, reusable UI components to ensure visual consistency and maintainability across the platform.",
        "Optimized complex state management and interactive canvas behaviors, resulting in smoother UX and reduced rendering overhead.",
        "Collaborated closely with backend and product teams to translate technical architecture into interactive visual tools for cloud solution design.",
      ],
    },    
    {
      designation: "Frontend Developer",
      company: "Sovlative",
      badge: "July 2022 - Feb 2025",
      present: false,
      li: [
        "Develop reusable and modular components to maintain consistency and reduce code redundancy.",
        "Write clean and well-structured code that is easy to read, understand and maintain.",
        "Use version control systems like Git to keep track of code changes and collaborate with other developers.",
        "Communicating technical issues in an understandable manner to the team and clients.",
        "Testing to identify bugs and technical issues before and after deploying."
      ],
    },
    {
      designation: "Associate software engineer(Internship)",
      company: "Abjayon PVT. LTD.",
      badge: "Jan 2022 - June 2022",
      present: false,
      li: [
        "Collaborated with senior engineers to develop and test new software features and functionalities.",
        "Participated in code reviews and contributed to the development of high-quality, maintainable codes",
        "Participated in Agile development methodologies, such as daily stand-up meetings, sprint planning, and retrospectives",
      ],
    },
  ];

  const education = [
    {
      designation: "MScIT",
      company:
        "Dhirubhai Ambani Institute of Information and Communication Technology (DAIICT), Gandhinagar",
      badge: "July 2020 - July 2022",
      present: false,
    },
    {
      designation: "BCA",
      company: "Somlalit Institute of Computer Application, Ahmedabad",
      badge: "Jan 2022 - June 2022",
      present: false,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="experience">
          <Heading title="Experience" />
          <HeadingAndSubHeading
            heading="Where the actual stuff goes!! 💼"
            headingStyle="headingNormal"
          />
          <div className="experience__container">
            <div className="experience__container__left">
              <HeadingAndSubHeading
                heading="Work Experience"
                headingStyle="headingNormal"
              />
              <div className="experience__container__left__timeline">
                <Timelines works={works} />
              </div>
            </div>
            <div className="experience__container__right">
              <HeadingAndSubHeading
                heading="Education"
                headingStyle="headingNormal"
              />
              <div className="experience__container__right__timeline">
                <Timelines works={education} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
