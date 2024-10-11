import { faPaperPlane, faMicrophone, faPhone, faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AgentesStyles.css';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AgenteObjetivos = () => {
  const [messages, setMessages] = useState([]); // Fixed the hook
  const [input, setInput] = useState('');
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showAgentOptions, setShowAgentOptions] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('Diario Personal');
  const chatEndRef = useRef(null);

  const agents = [
    { name: 'General', path: '/agente-general' },
    { name: 'Diario Personal', path: '/agente-diario' },
    { name: 'Familia', path: '/agente-familia' },
    { name: 'Amigos', path: '/agente-amigos' },
    { name: 'Yo en el Amor', path: '/agente-love' },
    { name: 'Pensamiento Negativo', path: '/agente-negativo' },
    { name: 'Solo Quiero Desahogarme', path: '/agente-desahogarme' },
    { name: 'Necesito Motivacion', path: '/agente-motivacion' },
    { name: 'Ayuda con Mis Planes', path: '/agente-objetivos' }
  ];

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleAgentSelection = (agent) => {
    setSelectedAgent(agent.name);
    setShowAgentOptions(false);
    navigate(agent.path);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: input }
      ]);

      // Close the agent options menu upon sending a message
      setShowAgentOptions(false);
      setShowProfileOptions(false);
      setInput('');

      // Example response from the bot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Hi! Necesitas organizar tus planes? O alcanzar tus metas? Puedes manejar tus objetivos aquí.' }
        ]);
      }, 500);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleProfileClick = () => {
    setShowProfileOptions(!showProfileOptions);
    setShowAgentOptions(false);
  };

  const handleAgentClick = () => {
    setShowAgentOptions(!showAgentOptions);
    setShowProfileOptions(false);
  };

  const handleProfileOptionClick = (option) => {
    switch (option) {
      case 'Salir':
        if (window.confirm('¿Estás seguro que quieres salir?')) {
          window.location.href = '/';
        }
        break;
      default:
        console.log(`${option} clicked`);
    }
  };

  // New function to handle managing objectives
  const handleManageObjectives = () => {
    navigate('/manage-objectives'); // Navigate to the goal manager page
    // Load initial messages if needed
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'bot', text: 'Bienvenido/a a la gestión de objetivos. ¿Cómo puedo ayudarte hoy?' }
    ]);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="agente-ia">
      <div className="user-profile-container">
        <div className="user-profile" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          <span className="username"></span>
        </div>

        {showProfileOptions && (
          <div className="profile-options">
            <p className="profile-option" onClick={() => handleProfileOptionClick('Editar Perfil')}>Editar Perfil</p>
            <p className="profile-option" onClick={() => handleProfileOptionClick('Historial')}>Historial</p>
            <p className="profile-option" onClick={() => handleProfileOptionClick('Soporte')}>Soporte</p>
            <p className="profile-option" onClick={() => handleProfileOptionClick('Salir')}>Salir</p>
            <p className="profile-option" onClick={handleAgentClick}>Hablar con otro agente</p>
          </div>
        )}

        {showAgentOptions && (
          <div className="agent-options">
            {agents.map((agent, index) => (
              <p
                key={index}
                className="agent-option"
                onClick={() => handleAgentSelection(agent)}
              >
                {agent.name}
              </p>
            ))}
            <p className="agent-option" onClick={handleManageObjectives}>Manejar Objetivos</p> {/* New option */}
          </div>
        )}
      </div>

      <div className="chat-container">
        <div className="welcome-message bot-message">
          <FontAwesomeIcon icon={faUserCircle} className="message-icon" />
          <span>Bienvenido/a, Necesitas organizar tus planes? O alcanzar tus metas? Sere tu brazo derecho en el camino a tus logros</span>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}>
              <FontAwesomeIcon icon={faUserCircle} className="message-icon" />
              <span>{message.text}</span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="input-container">
          <FontAwesomeIcon icon={faImage} className="icon-left" title="Subir imagen" />
          <textarea
            placeholder="Necesitas organizar tus planes? O alcanzar tus metas?, escribeme un mensaje para empezar a trabajar juntos"
            value={input}
            onChange={handleInputChange}
            maxLength={1500}
            className="chat-input"
            rows={1}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="icon-right"
            title="Enviar Mensaje"
            onClick={handleSendMessage}
          />
          <FontAwesomeIcon icon={faMicrophone} className="icon-right" title="Enviar Audio" />
          <FontAwesomeIcon icon={faPhone} className="icon-right" title="Llamar" />
        </div>
      </div>
    </div>
  );
};

export default AgenteObjetivos;
