import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import './RunningPlaces.css'; // Make sure to apply styles here

const lugaresParaCorrer = [
  {
    id: 1,
    name: 'Parque de la Ciudad',
    image: require('../../assets/images/city-park.png'), // Replace with actual image
    recommendation: 'El parque ofrece un ambiente seguro y refrescante para una carrera matutina o vespertina.',
  },
  {
    id: 2,
    name: 'Sendero del Río',
    image: require('../../assets/images/river-trail.png'), // Replace with actual image
    recommendation: 'Correr junto al río proporciona un ambiente tranquilo con un paisaje hermoso.',
  },
  {
    id: 3,
    name: 'Calles del Centro',
    image: require('../../assets/images/downtown-street.png'), // Replace with actual image
    recommendation: 'Correr por las calles del centro es perfecto para corredores urbanos que disfrutan del ambiente de la ciudad.',
  },
  {
    id: 4,
    name: 'Pista Escolar',
    image: require('../../assets/images/school-track.png'), // Replace with actual image
    recommendation: 'Las pistas brindan un ambiente controlado para entrenamiento de intervalos y trabajo de velocidad.',
  },
  {
    id: 5,
    name: 'Estadio Local',
    image: require('../../assets/images/local-stadium.png'), // Replace with actual image
    recommendation: 'El estadio es ideal para quienes prefieren carreras estructuradas y vueltas cronometradas.',
  },
  {
    id: 6,
    name: 'Calles Residenciales',
    image: require('../../assets/images/residential-street.png'), // Replace with actual image
    recommendation: 'Correr por los barrios residenciales es excelente por su conveniencia y accesibilidad.',
  },
  {
    id: 7,
    name: 'Plaza de la Ciudad',
    image: require('../../assets/images/city-plaza.png'), // Replace with actual image
    recommendation: 'Correr por la plaza es una forma única de explorar las partes centrales de la ciudad.',
  },
  {
    id: 8,
    name: 'Sendero Fitness',
    image: require('../../assets/images/fitness-trail.png'), // Replace with actual image
    recommendation: 'Un sendero fitness ofrece estaciones de ejercicios a lo largo de tu ruta de carrera.',
  },
];

const LugaresParaCorrer = () => {
  const [favoritos, setFavoritos] = useState([]);

  const alternarFavorito = (placeId) => {
    if (favoritos.includes(placeId)) {
      setFavoritos(favoritos.filter(id => id !== placeId)); // Remove from favorites
    } else {
      setFavoritos([...favoritos, placeId]); // Add to favorites
    }
  };

  return (
    <div className="lugares-para-correr">
      <div className="encabezado-favoritos">
        <h2>Lugares para Correr</h2>
        <FontAwesomeIcon icon={faRunning} className="icono-correr" />
      </div>
      <div className="contenedor-lugares">
        {lugaresParaCorrer.map(lugar => (
          <div key={lugar.id} className="tarjeta-lugar">
            <img src={lugar.image} alt={lugar.name} className="imagen-lugar" />
            <h3>{lugar.name}</h3>
            <p>{lugar.recommendation}</p>
            <FontAwesomeIcon
              icon={faRunning}
              className={`icono-favorito ${favoritos.includes(lugar.id) ? 'favorito' : ''}`}
              onClick={() => alternarFavorito(lugar.id)}
              title={favoritos.includes(lugar.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
            />
          </div>
        ))}
      </div>
      <div className="recomendaciones-link">
        <p>Para recomendaciones más personalizadas, <a href="/contacto">comunícate con nuestro asistente</a>.</p>
      </div>
    </div>
  );
};

export default LugaresParaCorrer;
