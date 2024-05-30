import { useParams } from "react-router-dom";
import { useFetchData } from "./FetchData.jsx";
import { CarrouselAppartement } from "./CarrouselAppartement.jsx";

export function DescriptionAppartement() {
  const data = useFetchData("/public/logements.json");
  const { id } = useParams();
  const appartement = data.find((appart) => appart.id === id);

  // Vérifier si appartement est défini
  if (!appartement) return <div>Appartement non trouvé</div>;

  return (
    <div>
      <CarrouselAppartement appartement={appartement} />
  
    </div>
  );
}
