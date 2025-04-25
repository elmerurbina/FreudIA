import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard container py-4">

      <section className="video-section mb-5">
        <div className="ratio ratio-16x9">
          <video autoPlay muted controls className="w-100">
            <source src={require('../../assets/videos/index.mp4')} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </section>

      <section className="about-us">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h2 className="text-center mb-4">Acerca de Nosotros</h2>
            <p>
              Somos un equipo de profesionales dedicados a brindar herramientas
              de salud mental a través de la inteligencia artificial. Nuestro objetivo es
              facilitar el acceso a recursos psicológicos y promover el bienestar emocional
              de las personas.
            </p>
            <p>
              Trabajamos en colaboración con clínicas asociadas, proveedores de seguros,
              farmacias y psicólogos certificados.
            </p>
            <p>
              La información de nuestros usuarios está asegurada y encriptada; no se comparte
              con terceros. No trabajamos con APIs para garantizar que los datos de los
              usuarios no sean compartidos con nadie, y no dependemos de otros servicios.
            </p>
            <p>
              Nuestro compromiso es ofrecer un entorno seguro y privado para todos nuestros
              usuarios.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
