import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NegativeThoughtIcon from '../../assets/images/negative-thought-agent.png';
import GeneralAgentIcon from '../../assets/images/general-agent.png'
import LoveAgentIcon from '../../assets/images/love-agent.png'
import FriendsAgentIcon from '../../assets/images/friends-agent.png'
import FamilyAgentIcon from '../../assets/images/family-agent.png'
import GoalsAgentIcon from '../../assets/images/goal-agent.png'
import DiaryAgentIcon from '../../assets/images/diary-agent.png'
import AgenteDesahogo from '../../assets/images/agente-desahogo.png'
import MotivationAgentIcon from '../../assets/images/motivation-agent.png'
import  PAP from '../../assets/images/PAP.png'

import './AgentesIA.css';
import agenteLove from "./AgenteLove"; // Import your CSS file

const AgentesIA = () => {
  const navigate = useNavigate(); // Initialize navigate

  const agents = [
    { name: "General", path: "/agente-general", icon: GeneralAgentIcon },
    { name: "Diario Personal", path: "/agente-diario", icon: DiaryAgentIcon },
    { name: "Primeros Auxilios Psicologicos", path: "/pap", icon: PAP},
    { name: "Familia", path: "/agente-familia", icon: FamilyAgentIcon },
    { name: "Amigos", path: "/agente-amigos", icon: FriendsAgentIcon},
    { name: "Yo en el Amor", path: "/agente-love", icon: LoveAgentIcon },
    { name: "Pensamiento Negativo", path: "/agente-negativo", icon: NegativeThoughtIcon },
    { name: "Solo Quiero Desahogarme", path: "/agente-desahogarme", icon: AgenteDesahogo },
    { name: "Necesito Motivacion", path: "/agente-motivacion", icon: MotivationAgentIcon },
    { name: "Ayuda con Mis Planes", path: "/agente-objetivos", icon: GoalsAgentIcon },
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
