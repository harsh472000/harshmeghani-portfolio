import React from "react";
import { Timeline } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import "./Timelines.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Timelines({ works }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const timelineItems = works?.map((work) => ({
    color: work.present === true ? "blue" : "green",
    dot:
      work.present === true ? <ClockCircleOutlined /> : <CheckCircleOutlined />,
    children: (
      <>
        <div className="timeline__position">
          <h3>{work.designation}</h3>
        </div>
        <div className="timeline__name">
          <h3>{work.company}</h3>
        </div>
        <div className="timeline__badges">{work.badge}</div>
        {work?.li ? (
          <>
            <div className="timeline__list">
              <ul>
                {work.li.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    ),
  }));
  return (
    <>
      <div className="timeline" data-aos="fade-up" data-aos-duration="1000">
        <Timeline items={timelineItems} />
      </div>
    </>
  );
}

export default Timelines;
