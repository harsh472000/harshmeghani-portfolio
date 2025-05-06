import React from "react";
import "./Button.scss";

function Button({ text, icon, href = "#", variant = "primary", target = "_blank" }) {
  return (
    <a href={href} target={target} rel="noopener noreferrer" className={`custom-button ${variant}`}>
      {icon && <span className="button-icon">{icon}</span>}
      <span>{text}</span>
    </a>
  );
}

export default Button;
