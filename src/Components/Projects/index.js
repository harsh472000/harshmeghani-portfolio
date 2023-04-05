import React from "react";
import Heading from "../Elements/Heading";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";

function index() {
  return (
    <>
      <div className="container">
        <Heading title="Projects" />
        <HeadingAndSubHeading
          heading="Each project is a unique piece of development 🧩"
          headingStyle="headingNormal"
        />
      </div>
    </>
  );
}

export default index;
