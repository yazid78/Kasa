import "../scss/CarrouselAppartement.scss";
import { useState } from 'react';
import left from '../assets/VectorLeft.png'
import right from '../assets/VectorRight.png'

export function CarrouselAppartement({ appartement }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % appartement.pictures.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((currentImage - 1 + appartement.pictures.length) % appartement.pictures.length);
  };

  return (
    <div className="containerCarrousel">
      <div className="carrousel">
        {appartement.pictures.map((picture, index) => (
          <img
            className={index === currentImage ? "active" : "opacity"}
            key={index}
            src={picture}
            alt={`Picture ${index + 1}`}
          />
        ))}
      </div>
      <div className="carrousel-controls">
        <button onClick={handlePrevImage}><img src={left} alt="left click" /></button>
        <button onClick={handleNextImage}><img src={right} alt="right click" /></button>
      </div>
    </div>
  );
}
