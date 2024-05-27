import React from "react";
import { useFetchData } from "./FetchData";
import "../scss/AppartementCards.scss";

export function AppartementCards(){
  const data = useFetchData("/public/logements.json");
  
  return (
    <div className='containerAppartement'>
      <div className="row">
        {data.map(appartement => (  
          <div className='cardAppartement' key={appartement.id}> 
            <img src={appartement.cover} alt={appartement.id}  />
            <p className='titleAppartement'>{appartement.title}</p>
          </div>  
        ))} 
      </div>
    </div>
  );
}
