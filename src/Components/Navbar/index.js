import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [open, setOpen] = useState(false);
  const NavMenus = ["Home", "About", "Project", "Experience", "Contact"];
  const toggleNavItems = () => {
    setOpen(!open);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="NavbarContainer">
        <div className="NavbarContainer__heading">
          <h3>Harsh Meghani</h3>
        </div>
        <div className="NavbarContainer__hamburger" onClick={toggleNavItems}>
          {open ? (
            <FontAwesomeIcon icon={faXmark} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
          )}
        </div>
        <div className={`NavbarContainer__navigation ${open ? "active" : ""}`}>
          <ul className="NavbarContainer__navigation__links">
            {NavMenus.map((menu, index) => {
              return (
                <li
                  className="NavbarContainer__navigation__links__li"
                  key={index}
                >
                  <a
                    href={`#${menu}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(menu);
                    }}
                  >
                    {menu}
                  </a>
                  {/* {menu} */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
