import { useState } from "react";
import "../scss/CollapseAppartement.scss";
import arrow from "../assets/arrow.png";
import { Rotate } from "./apropos";
export const CollapseAppartement = ({ appartement }) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleToggle1 = () => {
    setIsActive1(!isActive1);
    Rotate(1);
  };
  const handleToggle2 = () => {
    setIsActive2(!isActive2);
    Rotate(2);
  };

  return (
    <div className="contentCollapse">
      <div>
        <button type="button" className="collapsible" onClick={handleToggle1}>
          Description
          <img className="arrow1 arrow" src={arrow} alt="arrow" />
        </button>
        <div className={`content ${isActive1 ? "active" : ""}`}>
          <p>{appartement.description}</p>
        </div>
      </div>

      <div className="collapseEq">
        <button type="button" className="collapsible" onClick={handleToggle2}>
          Équipements
          <img className="arrow2 arrow" src={arrow} alt="arrow" />
        </button>
        <div className={`content ${isActive2 ? "active" : ""}`}>
          {appartement.equipments.map((equipments, index) => (
            <p key={index}>{equipments}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapseAppartement;
