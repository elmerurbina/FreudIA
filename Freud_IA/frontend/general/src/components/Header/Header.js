// src/components/Header/Header.js  
import React from 'react';  
import { Link } from 'react-router-dom'; // Import Link for navigation  
import './Header.css';  

const Header = () => {  
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
                <li>Contactar un Psicologo</li>  
                <li>Perfil</li>  
                <li>Reportes</li>  
              </ul>  
            </div>  
          </li>  
          <li>  
            Usuarios  
            <div className="dropdown">  
              <ul>  
                <li>  
                 <Link to="/agentes-ia">Agentes de IA</Link>  {/* Link to AgentesIA */}
                </li>  
                <li>Historial</li>  
                <li>Notificaciones</li>  
                <li>Perfil</li>  
              </ul>  
            </div>  
          </li>  
          <li>  
            Lugares  
            <div className="dropdown">  
              <ul>  
                <li>Para correr</li>  
                <li>Relajarme</li>  
                <li>Meditar</li>  
                <li>Lugares turísticos cerca de mí</li>  
              </ul>  
            </div>  
          </li>  
          <li>  
            Socios  
            <div className="dropdown">  
              <ul>  
                <li>Aseguradoras</li>  
                <li>Clinicas</li>  
                <li>Farmacias</li>  
              </ul>  
            </div>  
          </li>  
        </ul>  
      </nav>  
    </header>  
  );  
};  

export default Header;