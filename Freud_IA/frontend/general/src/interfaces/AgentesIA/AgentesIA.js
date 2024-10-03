import React, { useState } from 'react';
import negativeThoughtIcon from '../../assets/images/negative_thought.png';
import AgenteFamilia from "./AgenteFamilia"; // Ensure the correct path
import './AgentesIA.css'; // Import your CSS file

const AgentesIA = () => {
  const agents = [
    { name: "General", icon: "path/to/general_icon.png" },
    { name: "Diario Personal", icon: "path/to/diario_personal_icon.png" },
    { name: "Familia", icon: "path/to/familia_icon.png" },
    { name: "Amigos", icon: "path/to/amigos_icon.png" },
    { name: "Yo en el Amor", icon: "path/to/yo_en_el_amor_icon.png" },
    { name: "Pensamiento Negativo", icon: negativeThoughtIcon },
    { name: "Solo Quiero Desahogarme", icon: "path/to/desahogarme_icon.png" },
    { name: "Necesito Motivacion", icon: "path/to/necesito_motivacion_icon.png" },
    { name: "Ayuda con Mis Planes", icon: "path/to/planes_icon.png" },
  ];

  // State to track which agent is selected
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Click event handler to select an agent
  const handleAgentClick = (agentName) => {
    setSelectedAgent(agentName);
  };

  return (
    <div className="agentes-ia">
      <header>
        <ul>
          <li style={{ cursor: 'pointer' }}>Agentes de IA</li>
        </ul>
      </header>

      {/* Render AgenteFamilia interface if "Familia" is selected */}
      {selectedAgent === "Familia" ? (
        <AgenteFamilia />  // This will render the AgenteFamilia interface when "Familia" is selected
      ) : (
        <main className="agents-container">
          {/* Display agent cards if no agent is selected or if another agent is selected */}
          <div className="icons-container">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="agent-card"
                onClick={() => handleAgentClick(agent.name)} // Handle click event for each agent
                style={{ cursor: 'pointer' }}
              >
                <img src={agent.icon} alt={`${agent.name} Icon`} className="agent-icon" />
                <p>{agent.name}</p>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
};

export default AgentesIA;
