import React from "react";
import Heading from "../Elements/Heading";
import HeadingAndSubHeading from "../Elements/HeadingAndSubHeading";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
//import { faEnvelope } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  const contactDetails = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faLocationDot}
          size="2xl"
          className="contactContainer__wrapper__icon__icons"
        />
      ),
      title: "Location",
      subtitle: "Ahmedabad, Gujarat",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2xl"
          className="contactContainer__wrapper__icon__icons"
        />
      ),
      title: "Mail",
      subtitle: "harshmeghani777@gmail.com",
    },
  ];
  return (
    <>
      <div className="container">
        <Heading title="Contact" />
        <HeadingAndSubHeading
          heading="Don't be shy! Hit me up! 👇"
          headingStyle="headingNormal"
        />
        <div
          className="contactContainer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="contactContainer__wrapper">
            {contactDetails?.map((contact, index) => {
              return (
                <div
                  className="contactContainer__wrapper__iconheading"
                  key={index}
                >
                  <div className="contactContainer__wrapper__icon">
                    <span>{contact.icon}</span>
                  </div>
                  <div className="contactContainer__wrapper__headingsub">
                    <h3>{contact.title}</h3>
                    <p>{contact.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
