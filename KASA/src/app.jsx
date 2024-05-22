import React, { useState, useEffect } from 'react';
import './css/app.scss';
import { Navbar } from './components/Navbar.jsx';
import { Banner } from './components/Banner.jsx';

export function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("public/logements.json")
      .then(response => response.json())
      .then(result => {
        setPost(result);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div>
        {post.length > 0 ? (
          <div className="images-container">
            {post.map((logement, index) => (
              <img key={index} src={logement.cover} alt={`Cover ${index}`} />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
