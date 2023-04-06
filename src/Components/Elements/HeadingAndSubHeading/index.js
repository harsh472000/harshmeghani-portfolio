import React from "react";
import PropTypes from "prop-types";
import "./HeadingAndSubHeading.scss";

function HeadingAndSubHeading({
  heading,
  subheading,
  type,
  headingStyle,
  subheadingStyle,
  className,
  additionalElement,
  center,
  ...props
}) {
  return (
    <>
      <div className="HeadingSubheading">
        <div
          className={`HeadingSubheading__heading ${headingStyle} ${
            center ? "center" : ""
          }`}
        >
          {headingStyle === "headingNormal" ? (
            <h3>{heading}</h3>
          ) : (
            <h1>{heading}</h1>
          )}
          {additionalElement ? additionalElement : ""}
        </div>
        <div
          className={`HeadingSubheading__subheading ${subheadingStyle} ${
            center ? "center" : ""
          }`}
        >
          {subheading}
        </div>
      </div>
    </>
  );
}

HeadingAndSubHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  type: PropTypes.string,
  headingStyle: PropTypes.oneOf(["headingNormal", "headingBold"]),
  subheadingStyle: PropTypes.oneOf([
    "subHeadingNormal",
    "subHeadingBold",
    "subHeadingPill",
    "subHeadingSecondary",
  ]),
  className: PropTypes.string,
  center: PropTypes.bool,
};

HeadingAndSubHeading.defaultProps = {
  type: "subtitle1",
  headingStyle: "",
  subheadingStyle: "",
  className: "",
  center: false,
};

export default HeadingAndSubHeading;
