import React, { useState } from 'react';
import negativeThoughtIcon from '../../assets/images/negative_thought.png';
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

  // State for displaying the template
  const [showTemplate, setShowTemplate] = useState(false);

  // Click event handler to toggle template visibility
  const handleAgentesClick = () => {
    setShowTemplate(prevShowTemplate => !prevShowTemplate);
  };

  return (
    <div className="agentes-ia">
      <header>
        <ul>
          <li onClick={handleAgentesClick} style={{ cursor: 'pointer' }}>
            Agentes de IA
          </li>
        </ul>
      </header>

      {/* Conditional rendering for the template */}
      {showTemplate && (
        <div className="template">
          <h2>Agentes de IA</h2>
          <div className="icons-container">
            {agents.map((agent, index) => (
              <div key={index} className="agent-icon-container">
                <img src={agent.icon} alt={`${agent.name} Icon`} className="agent-icon" />
                <p>{agent.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <main className="agents-container">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <img src={agent.icon} alt={`${agent.name} Icon`} className="agent-icon" />
            <p>{agent.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AgentesIA;
