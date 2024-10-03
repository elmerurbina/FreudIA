import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMicrophone, faPhone, faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './AgenteFamilia.css';

const AgenteFamilia = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null); // Create a ref for the messages container

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      // Add user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: input }
      ]);
      // Clear input field after sending user's message
      setInput('');

      // Add bot's response after a brief delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: 'Hi! Soy el Agente de familia' }
        ]);
      }, 500); // Adjust delay as necessary
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // useEffect to scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the last message
    }
  }, [messages]);

  return (
    <div className="agente-familia">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}>
              <FontAwesomeIcon icon={faUserCircle} className="message-icon" />
              <span>{message.text}</span>
            </div>
          ))}
          {/* Dummy div as a reference for scrolling */}
          <div ref={chatEndRef} />
          <div className="user-profile">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            <span className="username">Perfil</span>
          </div>
        </div>

        <div className="input-container">
          <FontAwesomeIcon icon={faImage} className="icon-left" title="Subir imagen" />
          <textarea
            placeholder="Soy especialista en asuntos familiares, escribe tu mensaje"
            value={input}
            onChange={handleInputChange}
            maxLength={1500} // Max length set to 1500
            className="chat-input"
            rows={1} // Initially show one row
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

export default AgenteFamilia;