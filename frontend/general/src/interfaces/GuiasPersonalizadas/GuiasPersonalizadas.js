import React from 'react';
import './GuiasPersonalizadas.css';

const GuiasPersonalizadas = () => {
  const guides = [
    {
      title: 'Guías para la Felicidad',
      image: require ('../../assets/images/HappyLife.jpeg'),
      summary: 'Descubre prácticas y consejos para una vida más plena y feliz.',
      link: '/guias/felicidad'
    },
    {
      title: 'Cómo Educar a los Niños',
      image: require ('../../assets/images/chlidGuide.png'),
      summary: 'Consejos y técnicas para la educación positiva de los niños.',
      link: '/guias/educar-ninios'
    },
    {
      title: 'Guías para Controlar el Estrés',
      image: require ('../../assets/images/ControlStress.png'),
      summary: 'Aprende a manejar el estrés con métodos comprobados.',
      link: '/guias/controlar-estres'
    },
    {
      title: 'Guías de Primeros Auxilios Psicológicos',
      image: require ('../../assets/images/firsAid.jpeg'),
      summary: 'Técnicas y recomendaciones para ayudar a quienes lo necesiten.',
      link: '/guias/primeros-auxilios'
    },
    {
      title: 'Guías de Crecimiento Personal',
      image: require ('../../assets/images/PersonalGrowth.jpeg'),
      summary: 'Potencia tu desarrollo y crecimiento personal.',
      link: '/guias/crecimiento-personal'
    }
  ];

  return (
    <div className="guias-personalizadas">
      <h1>Guias Personalizadas</h1>
      <div className="guides-container">
        {guides.map((guide, index) => (
          <div className="guide-card" key={index}>
            <img src={guide.image} alt={guide.title} className="guide-image" />
            <h2>{guide.title}</h2>
            <p className="summary">{guide.summary}</p>
            <a href={guide.link} className="btn-primary">Ver guía completa</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuiasPersonalizadas;
