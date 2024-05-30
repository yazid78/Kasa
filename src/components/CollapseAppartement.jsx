import { useState } from "react";
import "../scss/CollapseAppartement.scss";

export const CollapseAppartement = ({ appartement }) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleToggle1 = () => {
    setIsActive1(!isActive1);
  };
  const handleToggle2 = () => {
    setIsActive2(!isActive2);
  };

  return (
    <div className="contentCollapse">
        <div>
           <button type="button" className="collapsible" onClick={handleToggle1}>
        Description 1
      </button>
      <div className={`content ${isActive1 ? "active" : ""}`}>
        <p>{appartement.description}</p>
      </div> 
        </div>
      
        <div>
           <button type="button" className="collapsible" onClick={handleToggle2}>
           Équipements
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
