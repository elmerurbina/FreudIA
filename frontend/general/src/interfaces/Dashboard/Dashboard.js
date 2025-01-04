import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
      <div className="dashboard">

        <section className="video-section">
          <video autoPlay muted controls>
            <source src={require('../../assets/videos/index.mp4')} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="about-us">
          <h2>Acerca de Nosotros</h2>
          <p>
            Somos un equipo de profesionales dedicados a brindar herramientas
            de salud mental a través de la inteligencia artificial. Nuestro objetivo es
            facilitar el acceso a recursos psicológicos y promover el bienestar emocional
            de las personas. Trabajamos en colaboración con clínicas asociadas, proveedores
            de seguros, farmacias y psicólogos certificados.
          </p>
          <p>
            La información de nuestros usuarios está asegurada y encriptada; no se comparte
            con terceros. No trabajamos con APIs para garantizar que los datos de los
            usuarios no sean compartidos con nadie, y no dependemos de otros servicios.
            Nuestro compromiso es ofrecer un entorno seguro y privado para todos nuestros
            usuarios.
          </p>
        </section>

      </div>
  );
};

export default Dashboard;
