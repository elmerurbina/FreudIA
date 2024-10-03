import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle navigation for Psicologos and Socios items
  const handleIdentificationClick = (e) => {
    const clickedItem = e.target.innerText; // Get the clicked item text

    // Redirect to the IdentificationPanel and pass the clicked item
    navigate('/identification', { state: { clickedItem } });
  };

  // Function to handle navigation to sign-in for dropdown items, passing the target route
  const handleUserClick = (e) => {
    const clickedItem = e.target.innerText;
    let targetRoute = '/';

    // Determine target route based on clicked item
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
      case 'Notificaciones':
        targetRoute = '/notificaciones';
        break;
      case 'Cuenta':
        targetRoute = '/cuenta';
        break;
      default:
        break;
    }

    if (clickedItem !== 'Agentes de IA') {
      // Redirect to the sign-in page, passing the intended target route
      navigate('/sign-in', { state: { from: targetRoute } });
    }
  };

  // Function to handle navigation for Lugares items
  const handleLugaresClick = (e) => {
    const clickedItem = e.target.innerText; // Get the clicked item text
    let targetRoute = '/'; // Default target route

    // Determine target route based on clicked item
    switch (clickedItem) {
      case 'Para correr':
        targetRoute = '/running-places'; // Update with actual route
        break;
      case 'Relajarme':
        targetRoute = '/relax'; // Update with actual route
        break;
      case 'Meditar':
        targetRoute = '/meditation'; // Update with actual route
        break;
      case 'Lugares turísticos cerca de mí':
        targetRoute = '/touristic'; // Update with actual route
        break;
      default:
        break;
    }

    // Navigate to the target route when an item is clicked
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
            Psicologos
            <div className="dropdown">
              <ul>
                <li onClick={handleIdentificationClick}>Contactar un Psicologo</li>
                <li onClick={handleIdentificationClick}>Perfil</li>
                <li onClick={handleIdentificationClick}>Reportes</li>
                <li onClick={handleIdentificationClick}>Directiva</li>
              </ul>
            </div>
          </li>
          <li>
            Usuarios
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/agentes-ia">Agentes de IA</Link>
                </li>
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
          <li>
            Socios
            <div className="dropdown">
              <ul>
                <li onClick={handleIdentificationClick}>Aseguradoras</li>
                <li onClick={handleIdentificationClick}>Clinicas</li>
                <li onClick={handleIdentificationClick}>Farmacias</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;