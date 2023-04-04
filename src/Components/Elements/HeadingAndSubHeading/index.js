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
  ...props
}) {
  return (
    <>
      <div className="HeadingSubheading">
        <div className={`HeadingSubheading__heading ${headingStyle}`}>
          {headingStyle === "headingNormal" ? (
            <h3>{heading}</h3>
          ) : (
            <h1>{heading}</h1>
          )}
          {additionalElement ? additionalElement : ""}
        </div>
        <div className={`HeadingSubheading__subheading ${subheadingStyle}`}>
          {subheading}
        </div>
      </div>
    </>
  );
}

HeadingAndSubHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  type: PropTypes.string,
  headingStyle: PropTypes.oneOf(["headingNormal", "headingBold"]),
  subheadingStyle: PropTypes.oneOf([
    "subHeadingNormal",
    "subHeadingBold",
    "subHeadingPill",
    "subHeadingSecondary",
  ]),
  className: PropTypes.string,
};

HeadingAndSubHeading.defaultProps = {
  type: "subtitle1",
  headingStyle: "",
  subheadingStyle: "",
  className: "",
};

export default HeadingAndSubHeading;
