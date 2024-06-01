import "../scss/apropos.scss";
import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import BannerApropos from "../assets/BannerApropos.png";
import { Footer } from "../components/Footer.jsx";
import { useState } from "react";
import arrow from "../assets/arrow.png";

export const Rotate = (index) => {
  const arrowIcons = document.querySelectorAll(`.arrow${index}`);
  arrowIcons.forEach((arrowIcon) => {
    arrowIcon.classList.toggle("rotated");
  });
};

export const Apropos = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const handleToggle1 = () => {
    setIsActive1(!isActive1);
    Rotate(1);
  };
  const handleToggle2 = () => {
    setIsActive2(!isActive2);
    Rotate(2);
  };
  const handleToggle3 = () => {
    setIsActive3(!isActive3);
    Rotate(3);
  };
  const handleToggle4 = () => {
    setIsActive4(!isActive4);
    Rotate(4);
  };

  return (
    <>
      <div className="PageApropos">
        <Navbar />
        <Banner imgSrc={BannerApropos} bannerTexte="" />
        <div className="container">
          <div>
            <button type="button" className="toggle-button" onClick={handleToggle1}>
              Fiabilité
              <img className="arrow1 arrow" src={arrow} alt="arrow" />
            </button>
            <div className={`collapse-content ${isActive1 ? "active" : ""}`}>
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                et | toutes les informations sont régulièrement vérifiées par nos équipes. |
              </p>
            </div>
          </div>
          <div>
            <button type="button" className="toggle-button" onClick={handleToggle2}>
              Respect
              <img className="arrow2 arrow" src={arrow} alt="arrow" />
            </button>
            <div className={`collapse-content ${isActive2 ? "active" : ""}`}>
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          </div>
          <div>
            <button type="button" className="toggle-button" onClick={handleToggle3}>
              Service
              <img className="arrow arrow3" src={arrow} alt="arrow" />
            </button>
            <div className={`collapse-content ${isActive3 ? "active" : ""}`}>
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme. |
              </p>
            </div>
          </div>
          <div>
            <button type="button" className="toggle-button" onClick={handleToggle4}>
              Sécurité
              <img className="arrow arrow4" src={arrow} alt="arrow" />
            </button>
            <div className={`collapse-content ${isActive4 ? "active" : ""}`}>
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement |
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                organisons | également des ateliers sur la sécurité domestique pour nos hôtes. |
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
