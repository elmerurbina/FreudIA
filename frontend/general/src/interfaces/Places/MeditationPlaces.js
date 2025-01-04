import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './MeditationPlaces.css'; // Make sure this CSS file is updated accordingly

const places = [
  {
    id: 1,
    name: 'Playa Serena',
    image: require('../../assets/images/beach.png'),// Replace with actual image URL
    recommendation: 'La playa es un lugar perfecto para meditar. Escuchar el sonido de las olas y sentir la brisa marina ayuda a liberar el estrés.',
  },
  {
    id: 2,
    name: 'Montaña Verde',
    image: require('../../assets/images/forest.png'), // Replace with actual image URL
    recommendation: 'Las montañas proporcionan un ambiente tranquilo. La meditación en la naturaleza puede ser profundamente rejuvenecedora.',
  },
  {
    id: 3,
    name: 'Jardín Zen',
    image: require('../../assets/images/zen_garden.png'), // Replace with actual image URL
    recommendation: 'Un jardín zen es un espacio contemplativo ideal. Practicar mindfulness aquí te permite conectarte con el entorno.',
  },
  {
    id: 4,
    name: 'Bosque Encantado',
    image: require('../../assets/images/valle.png'), // Replace with actual image URL
    recommendation: 'Meditar en el bosque, rodeado de árboles y naturaleza, proporciona un refugio pacífico.',
  },
  {
    id: 5,
    name: 'Cascada Escondida',
    image: require('../../assets/images/cascade.png'), // Replace with actual image URL
    recommendation: 'El sonido del agua cayendo en una cascada crea un ambiente relajante que es ideal para la meditación.',
  },
  {
    id: 6,
    name: 'Parque de Flores',
    image: require('../../assets/images/park.png'), // Replace with actual image URL
    recommendation: 'Rodeado de flores, este parque es un lugar inspirador donde puedes meditar y reflexionar.',
  },
  {
    id: 7,
    name: 'Templo de Meditación',
    image: require('../../assets/images/temple.png'), // Replace with actual image URL
    recommendation: 'Un templo dedicado a la meditación ofrece un espacio sagrado y tranquilo para la práctica.',
  },
  {
    id: 8,
    name: 'Lago Tranquilo',
    image: require('../../assets/images/lake.png'), // Replace with actual image URL
    recommendation: 'Meditar junto a un lago puede ayudar a conectarte con la serenidad y la paz interior.',
  },
  {
    id: 9,
    name: 'Colinas Olas',
    image: require('../../assets/images/colina.png'), // Replace with actual image URL
    recommendation: 'Las colinas ofrecen una vista panorámica de la naturaleza, ideal para meditar al aire libre.',
  },
  {
    id: 10,
    name: 'Gruta Silenciosa',
    image: require('../../assets/images/arroyo.png'), // Replace with actual image URL
    recommendation: 'Una gruta proporciona un refugio seguro y tranquilo, perfecto para la meditación profunda.',
  },
];

const MeditationPlaces = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (placeId) => {
    if (favorites.includes(placeId)) {
      setFavorites(favorites.filter(id => id !== placeId)); // Remove from favorites
    } else {
      setFavorites([...favorites, placeId]); // Add to favorites
    }
  };

  return (
    <div className="meditation-places">
      <div className="favorites-header">
        <h2>Favoritos</h2>
        <FontAwesomeIcon icon={faStar} className="fav-icon" />
      </div>
      <div className="places-container">
        {places.map(place => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} className="place-image" />
            <h3>{place.name}</h3>
            <p>{place.recommendation}</p>
            <FontAwesomeIcon
              icon={faStar}
              className={`favorite-icon ${favorites.includes(place.id) ? 'favorited' : ''}`}
              onClick={() => toggleFavorite(place.id)}
              title={favorites.includes(place.id) ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeditationPlaces;