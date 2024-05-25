import React, { useEffect, useState } from "react";
import "../scss/AppartementCards.scss";

export function AppartementCards(){
  const [data, setData] = useState([]);
useEffect(() =>{
  fetch("/public/logements.json")
  .then(response => response.json())
  .then(result => setData(result))
  .catch(err => console.error(err));
},[]);
 return (
   <div className='containerAppartement'>
    <div className="row">
      {data.map((appartement =>  
      <div className='cardAppartement' key={appartement.id}> 
      <img src={appartement.cover} alt={appartement.id}  />
       <p className='titleAppartement'>{appartement.title}</p>
     </div>  
       ))} 
    </div>
      
   </div>
 )
}