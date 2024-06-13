import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "./FetchData.jsx";
import { CarrouselAppartement } from "./CarrouselAppartement.jsx";
import { Collapse } from "./Collapse.jsx";
import { Navbar } from ".//Navbar.jsx";
import "../scss/DescriptionAppartement.scss";
import "../scss/Navbar.scss";

export function DescriptionAppartement() {
  const navigate = useNavigate();
  const data = useFetchData("/Kasa/logements.json");
  const { id } = useParams();
  const appartement = data.find((appart) => appart.id === id);
  if (!appartement) {
    navigate("/error");
    return null;
  }

  const calculateRatingWidth = (rating) => {
    return (rating / 5) * 100 + "%";
  };

  return (
    <div>
      <Navbar />
      <CarrouselAppartement appartement={appartement} />
      <div className="containerInformations">
        <div>
          <h1>{appartement.title}</h1>
          <p className="location">{appartement.location}</p>
        </div>
        <div className="containerHost">
          <p>{appartement.host.name}</p>
          <img className="hostImg" src={appartement.host.picture} alt="image host" />
        </div>
      </div>
      <div className="containerTagsRating">
        <div className="rubriqueTags">
          {appartement.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="stars">
          <span className="star">☆</span>
          <span className="star">☆</span>
          <span className="star">☆</span>
          <span className="star">☆</span>
          <span className="star">☆</span>
          <span className="rating" style={{ width: calculateRatingWidth(appartement.rating) }}></span>
        </div>
      </div>
      <div className="ContainerMain">
        <Collapse title="Description" content={<p>{appartement.description}</p>} />
        <Collapse
          title="Équipements"
          content={appartement.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
}
