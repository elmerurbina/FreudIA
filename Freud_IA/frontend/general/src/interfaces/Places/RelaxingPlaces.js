import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import './RelaxingPlaces.css'; // Asegúrate de actualizar este archivo CSS correctamente

const relaxingPlaces = [
  {
    id: 1,
    name: 'Jardín Botánico',
    image: require('../../assets/images/botanical-garden.png'), // Reemplazar con la imagen real
    recommendation: 'Un paseo por el jardín botánico te permitirá desconectar y reconectar con la naturaleza.',
  },
  {
    id: 2,
    name: 'Playa Serena',
    image: require('../../assets/images/beach.png'), // Reemplazar con la imagen real
    recommendation: 'Escuchar el sonido de las olas en la playa es una forma fantástica de relajarse.',
  },
  {
    id: 3,
    name: 'Lago Tranquilo',
    image: require('../../assets/images/river.png'), // Reemplazar con la imagen real
    recommendation: 'El lago o un rio tranquilo ofrece un ambiente pacífico para meditar o simplemente descansar.',
  },
  {
    id: 4,
    name: 'Montaña Silenciosa',
    image: require('../../assets/images/quiet-mountain.png'), // Reemplazar con la imagen real
    recommendation: 'Escalar la montaña silenciosa te conecta con la paz y la tranquilidad de la naturaleza.',
  },
  {
    id: 5,
    name: 'Spa Natural',
    image: require('../../assets/images/natural-spa.png'), // Reemplazar con la imagen real
    recommendation: 'Relájate y rejuvenece en un spa rodeado de la naturaleza.',
  },
  {
    id: 6,
    name: 'Cabaña en el Bosque',
    image: require('../../assets/images/forest-cabin.png'), // Reemplazar con la imagen real
    recommendation: 'Disfruta de la serenidad y calma en una cabaña aislada en el bosque.',
  },
];

const RelaxingPlaces = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (placeId) => {
    if (favorites.includes(placeId)) {
      setFavorites(favorites.filter(id => id !== placeId)); // Remove from favorites
    } else {
      setFavorites([...favorites, placeId]); // Add to favorites
    }
  };

  return (
    <div className="relaxing-places">
      <div className="header-favorites">
        <h2>Lugares para Relajarse</h2>
        <FontAwesomeIcon icon={faSpa} className="icon-relax" />
      </div>
      <div className="places-container">
        {relaxingPlaces.map(place => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} className="place-image" />
            <h3>{place.name}</h3>
            <p>{place.recommendation}</p>
            <FontAwesomeIcon
              icon={faSpa}
              className={`favorite-icon ${favorites.includes(place.id) ? 'favorite' : ''}`}
              onClick={() => toggleFavorite(place.id)}
              title={favorites.includes(place.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelaxingPlaces;
