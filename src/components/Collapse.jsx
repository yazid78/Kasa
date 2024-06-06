import { useState } from "react";
import arrow from "../assets/arrow.png";
import "../scss/CollapseAppartement.scss";

export const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="collapse-container">
      <button type="button" className="collapsible" onClick={handleToggle}>
        {title}
        <img className={`arrow${isActive ? " rotated" : ""}`} src={arrow} alt="arrow" />
      </button>
      <div className={`content ${isActive ? "active" : ""}`}>
        {content}
      </div>
    </div>
  );
};
