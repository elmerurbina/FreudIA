import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmmaAgentIcon from '../../assets/images/Emma.jpeg';
import JohnAgentIcon from '../../assets/images/John-Agent.jpeg';
import NicoleAgentIcon from '../../assets/images/Nicole.jpeg';
import DavidAgentIcon from '../../assets/images/David.jpeg';
import MarkAgentIcon from '../../assets/images/Mark.jpeg';
import RobertAgentIcon from '../../assets/images/Robert-agent.jpeg';
import AmandaAgentIcon from '../../assets/images/Amanda.jpeg';
import LauraAgentIcon from '../../assets/images/Laura.jpeg';
import JessicaAgentIcon from '../../assets/images/Jessica.jpeg';
import SarahAgentIcon from '../../assets/images/Sarah.jpeg';
import LisaAgentIcon from '../../assets/images/Lisa.jpeg';
import MarinaAgentIcon from '../../assets/images/Marina.jpeg';

import './AgentesIA.css';

const AgentesIA = () => {
  const navigate = useNavigate();

  const agents = [
    {
      name: "Dr. John",
      path: "/john-agent",
      icon: JohnAgentIcon,
      summary: "Psicólogo general con un enfoque integral para problemas psicológicos y de salud mental."
    },
    {
      name: "Asistente Amanda",
      path: "/amanda-agent",
      icon: AmandaAgentIcon,
      summary: "Secretaria personal para el manejo de tu agenda. Registra tus eventos y te ayuda a organizar tu tiempo."
    },
    {
      name: "Dra. Sarah",
      path: "/pap",
      icon: SarahAgentIcon,
      summary: "Especialista en Primeros Auxilios Psicológicos. Brinda orientación en situaciones de crisis emocional."
    },
    {
      name: "Coach Mark",
      path: "/mark-agent",
      icon: MarkAgentIcon,
      summary: "Especialista en relaciones personales, proporciona consejos y guías para mejorar la convivencia con familiares, amigos y compañeros de trabajo"
    },
    {
      name: "Dr. David",
      path: "/david-agent",
      icon: DavidAgentIcon,
      summary: "Experto en manejo de problemas de bipolaridad, con estrategias para mejorar la estabilidad emocional."
    },
    {
      name: "Coach Nicole",
      path: "/nicole-agent",
      icon: NicoleAgentIcon,
      summary: "Especialista en relaciones de pareja. Ofrece apoyo para manejar rupturas amorosas y problemas sentimentales."
    },
    {
      name: "Dra. Emma",
      path: "/emma-agent",
      icon: EmmaAgentIcon,
      summary: "Especialista en manejo de pensamientos negativos y desmotivación. Ofrece guías personalizadas y consejos para mejorar el bienestar emocional."
    },
    {
      name: "Dra. Laura",
      path: "/laura-agent",
      icon: LauraAgentIcon,
      summary: "Experta en control y prevención del estrés, ansiedad y depresión. Ideal para quienes buscan mejorar su salud mental general."
    },
    {
      name: "Asistente Jessica",
      path: "/jessica-agent",
      icon: JessicaAgentIcon,
      summary: "Tu asistente personal para el manejo de un diario. Puedes registrar/consultar tus experiencias diarias mediante texto o audio, y ella se encarga de organizarlas por fecha."
    },
    {
      name: "Coach Robert",
      path: "/robert-agent",
      icon: RobertAgentIcon,
      summary: "Experto en finanzas y desarrollo personal. Brinda apoyo para resolver problemas financieros y alcanzar metas a corto y largo plazo."
    },
       {
      name: "Srita. Lisa",
      path: "/lisa-agent",
      icon: LisaAgentIcon,
      summary: "Disponible para conversar cuando te sientas solo/a o necesites desahogarte. Es amigable y siempre dispuesta a escucharte."
    },
    {
      name: "Marina",
      path: "/agente-amigos",
      icon: MarinaAgentIcon,
      summary: "Asistente de la red de apoyo para situaciones de riesgo de suicidio. Brinda ayuda tanto a personas con pensamientos suicidas como a sus familiares."
    },
  ];

  const handleAgentClick = (path) => {
    navigate(path);
  };

  return (
    <div className="agentes-ia">
      <header>
        <ul>
          <li style={{ cursor: 'pointer' }}>Agentes de IA</li>
        </ul>
      </header>

      <main className="agents-container">
        <div className="icons-container">
          {agents.map((agent, index) => (
            <div key={index} className="agent-card" style={{ cursor: 'pointer' }}>
              <img src={agent.icon} alt={`${agent.name} Icon`} className="agent-icon" />
              <h3>{agent.name}</h3>
              <p>{agent.summary}</p>
              <button
                className="contact-button"
                onClick={() => handleAgentClick(agent.path)}
              >
               ¡Hablemos!
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AgentesIA;
