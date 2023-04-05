import React from "react";
import "./Heading.scss";

function Heading({ title }) {
  return (
    <>
      <div className="text">
        <h4>{title}</h4>
      </div>
    </>
  );
}

export default Heading;
