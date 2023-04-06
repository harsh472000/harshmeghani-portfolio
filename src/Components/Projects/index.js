import React from "react";
import Card from "../Card";
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
        <Card />
      </div>
    </>
  );
}

export default index;
