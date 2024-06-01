import { useParams } from "react-router-dom";
import { useFetchData } from "./FetchData.jsx";
import { CarrouselAppartement } from "./CarrouselAppartement.jsx";
import  CollapseAppartement  from './CollapseAppartement.jsx'
import "../scss/DescriptionAppartement.scss";
import "../scss/Navbar.scss";

export function DescriptionAppartement() {
  const data = useFetchData("../../public/logements.json");
  const { id } = useParams();
  const appartement = data.find((appart) => appart.id === id);

  if (!appartement)  return <p>loading ... ⏳</p>;
  const calculateRatingWidth = (rating) => {
    return (rating / 5) * 100 + "%";
  };
  return (
    <div>
      <CarrouselAppartement appartement={appartement} />
      <div className="containerInformations">
        <div>
          <h1>{appartement.title}</h1>
          <p>{appartement.location}</p>
        </div>
        <div className="containerHost">
          <p>{appartement.host.name}</p>
          {<img className="hostImg" src={appartement.host.picture} alt="image host" />}
        </div>
      </div>
      <div className="containerTagsRating">
        <div className="rubriqueTags">
          {appartement.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div class="stars">
          <span class="star">☆</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
          <span className="rating" style={{ width: calculateRatingWidth(appartement.rating) }}></span>
        </div>
      </div>
      <CollapseAppartement appartement={appartement} />
    </div>
  );
}
