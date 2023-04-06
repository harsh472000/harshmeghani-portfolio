import React from "react";
import { Timeline } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import "./Timelines.scss";

function Timelines({ works }) {
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
      <div className="timeline">
        <Timeline items={timelineItems} />
      </div>
    </>
  );
}

export default Timelines;
