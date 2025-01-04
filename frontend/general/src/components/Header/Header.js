import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleIdentificationClick = (e) => {
    const clickedItem = e.target.innerText;
    navigate('/identification', { state: { clickedItem } });
  };

  const handleUserClick = (e) => {
    const clickedItem = e.target.innerText;
    let targetRoute = '/';

    switch (clickedItem) {
      case 'Objetivos':
        targetRoute = '/goals';
        break;
      case 'Expediente':
        targetRoute = '/expediente';
        break;
      case 'Red de Apoyo':
        targetRoute = '/red-de-apoyo';
        break;
      case 'Historial':
        targetRoute = '/historial';
        break;
      case 'Guias Personalizadas':
        targetRoute = '/guias-personalizadas';
        break;
      case 'Notificaciones':
        targetRoute = '/notifications';
        break;
      case 'Cuenta':
        targetRoute = '/cuenta';
        break;
      default:
        break;
    }

    if (clickedItem !== 'Agentes de IA') {
      navigate('/sign-in', { state: { from: targetRoute } });
    }
  };

  const handleLugaresClick = (e) => {
    const clickedItem = e.target.innerText;
    let targetRoute = '/';

    switch (clickedItem) {
      case 'Para correr':
        targetRoute = '/running-places';
        break;
      case 'Relajarme':
        targetRoute = '/relaxing';
        break;
      case 'Meditar':
        targetRoute = '/meditation';
        break;
      case 'Lugares turísticos cerca de mí':
        targetRoute = '/touristic';
        break;
      default:
        break;
    }

    navigate(targetRoute);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="freud">FREUD</span>
        <span className="ia">IA</span>
      </div>
      <p className="slogan">Inteligencia Artificial al Servicio de la Humanidad</p>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            Administradores
            <div className="dropdown">
              <ul>
                <li onClick={handleIdentificationClick}>Asociados</li>
                <li onClick={handleUserClick}>Perfil Psicologo</li>
                <li onClick={handleIdentificationClick}>Reportes</li>
                <li onClick={handleIdentificationClick}>Directiva</li>
              </ul>
            </div>
          </li>
          <li>
          Usuarios
            <div className="dropdown scrollable-dropdown">
              <ul>
                <li>
                  <Link to="/agentes-ia">Agentes de IA</Link>
                </li>
                <li onClick={handleUserClick}>Psicologos en Linea</li>
                <li onClick={handleUserClick}>Guias Personalizadas</li>
                <li onClick={handleUserClick}>Comprar Medicina</li>
                <li onClick={handleUserClick}>Objetivos</li>
                <li onClick={handleUserClick}>Expediente</li>
                <li onClick={handleUserClick}>Red de Apoyo</li>
                <li onClick={handleUserClick}>Historial</li>
                <li onClick={handleUserClick}>Notificaciones</li>
                <li onClick={handleUserClick}>Cuenta</li>


              </ul>
            </div>
          </li>
          <li>
          Lugares
            <div className="dropdown">
              <ul>
                <li onClick={handleLugaresClick}>Para correr</li>
                <li onClick={handleLugaresClick}>Relajarme</li>
                <li onClick={handleLugaresClick}>Meditar</li>
                <li onClick={handleLugaresClick}>Lugares turísticos cerca de mí</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
