import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import negativeThoughtIcon from '../../assets/images/negative_thought.png';
import './AgentesIA.css'; // Import your CSS file

const AgentesIA = () => {
  const navigate = useNavigate(); // Initialize navigate

  const agents = [
    { name: "General", path: "/agente-general", icon: "path/to/general_icon.png" },
    { name: "Diario Personal", path: "/agente-diario", icon: "path/to/diario_personal_icon.png" },
    { name: "Familia", path: "/agente-familia", icon: "path/to/familia_icon.png" },
    { name: "Amigos", path: "/agente-amigos", icon: "path/to/amigos_icon.png" },
    { name: "Yo en el Amor", path: "/agente-love", icon: "path/to/yo_en_el_amor_icon.png" },
    { name: "Pensamiento Negativo", path: "/agente-negativo", icon: negativeThoughtIcon },
    { name: "Solo Quiero Desahogarme", path: "/agente-desahogarme", icon: "path/to/desahogarme_icon.png" },
    { name: "Necesito Motivacion", path: "/agente-motivacion", icon: "path/to/necesito_motivacion_icon.png" },
    { name: "Ayuda con Mis Planes", path: "/agente-objetivos", icon: "path/to/planes_icon.png" },
  ];

  // Click event handler to select an agent and navigate to the corresponding path
  const handleAgentClick = (path) => {
    navigate(path); // Use navigate to change the route
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
            <div
              key={index}
              className="agent-card"
              onClick={() => handleAgentClick(agent.path)}
              style={{ cursor: 'pointer' }}
            >
              <img src={agent.icon} alt={`${agent.name} Icon`} className="agent-icon" />
              <p>{agent.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AgentesIA;
