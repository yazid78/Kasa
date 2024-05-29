import { useParams } from "react-router-dom";
import { useFetchData } from "./FetchData";

export function DescriptionAppartement() {
  const data = useFetchData("/public/logements.json");
  console.log('data', data);
  
  const { id } = useParams();  
  const appartement = data.find(appart => appart.id === id);
  console.log('fdfsdfsd', appartement);
  if (!appartement) return <div>Appartement non trouvé</div>;

  return (
    <div>
        <h1>{appartement.title}</h1>
        <img src={appartement.pictures[2]} alt={appartement.title} />
        <p>{appartement.description}</p>
    </div>
  );
}
