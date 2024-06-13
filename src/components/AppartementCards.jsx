import { useFetchData } from "./FetchData";
import "../scss/AppartementCards.scss";
import { Link } from "react-router-dom";

export function AppartementCards() {
  const data = useFetchData("/Kasa/logements.json");
  const loader = data.length === 0;
  return (
    <div className="containerAppartement">
      {loader ? (
        <p>loading ... ⏳</p>
      ) : (
        <div className="row">
          {data.map((appartement) => (
            <Link key={appartement.id} to={"/Kasa/appartements/" + appartement.id}>
              <div className="cardAppartement">
                <img src={appartement.cover} alt={appartement.id} />
                <p className="titleAppartement">{appartement.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
