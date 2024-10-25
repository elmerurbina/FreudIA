import { faPaperPlane, faMicrophone, faPhone, faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AgentesStyles.css';
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AgenteGeneral = () => {
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

      const userMessage = input.toLowerCase(); // Normalize input for matching
      let botResponse = '';

      // Match user input with predefined questions
      switch (userMessage) {
        case 'que es la ansiedad?':
          botResponse = 'La ansiedad es una respuesta natural del cuerpo al estrés. Es normal sentir ansiedad en situaciones desafiantes.';
          break;
           case 'hola':
          botResponse = 'Hola mucho gusto!';
          break;
           case 'que es la ansiedad?':
          botResponse = 'La ansiedad es una respuesta natural del cuerpo al estrés. Es normal sentir ansiedad en situaciones desafiantes.';
          break;
          case 'como estas?':
          botResponse = 'Muy bien gracias! y tu que tal?';
          break;
        case 'como puedo manejar el estres?':
          botResponse = 'Algunas técnicas incluyen la meditación, el ejercicio regular y hablar con alguien de confianza sobre tus preocupaciones.';
          break;
        case 'siento mucha tristeza.':
          botResponse = 'Lamento que te sientas así. Es importante hablar sobre tus sentimientos. ¿Te gustaría compartir más?';
          break;
        case 'que puedo hacer para dormir mejor?':
          botResponse = 'Establecer una rutina de sueño, evitar pantallas antes de acostarte y crear un ambiente tranquilo puede ayudarte a dormir mejor.';
          break;
        case 'por que me siento tan cansado?':
          botResponse = 'El cansancio puede ser causado por varias razones, como falta de sueño, estrés o problemas de salud. ¿Has estado durmiendo lo suficiente?';
          break;
        case 'que hacer si tengo ataques de panico?':
          botResponse = 'Durante un ataque de pánico, intenta respirar profundamente y cuenta hasta cinco. Hablar con un profesional también puede ser útil.';
          break;
        case 'me siento solo.':
          botResponse = 'La soledad es algo que muchos experimentan. ¿Hay alguien con quien te gustaría hablar o actividades que te gusten hacer para conectarte con otros?';
          break;
        case 'como puedo mejorar mi autoestima?':
          botResponse = 'Trabajar en la autocompasión, establecer metas pequeñas y celebrar tus logros puede ayudarte a mejorar tu autoestima.';
          break;
        case 'tengo miedo de hablar en publico?':
          botResponse = 'Es normal sentir miedo al hablar en público. Practicar y prepararte bien puede ayudarte a sentirte más seguro.';
          break;
        case 'que son los pensamientos negativos?':
          botResponse = 'Los pensamientos negativos son creencias o ideas que pueden afectar tu estado de ánimo y autoestima. Identificarlos es el primer paso para cambiarlos.';
          break;
        case 'como puedo ser mas positivo?':
          botResponse = 'Practicar la gratitud, rodearte de personas positivas y desafiar tus pensamientos negativos puede ayudarte a ser más positivo.';
          break;
        case 'por que me siento ansioso antes de un evento?':
          botResponse = 'Es común sentirse ansioso antes de eventos importantes. La anticipación puede generar nerviosismo, pero prepararte puede ayudar a reducir la ansiedad.';
          break;
        case '¿cómo puedo establecer límites saludables?':
          botResponse = 'Comunica tus necesidades claramente y aprende a decir "no" cuando sea necesario. Establecer límites es fundamental para tu bienestar.';
          break;
        case 'me siento abrumado con el trabajo.':
          botResponse = 'Tómate un momento para respirar y priorizar tus tareas. A veces, dividir el trabajo en partes más pequeñas puede hacer que sea más manejable.';
          break;
        case '¿qué hacer si tengo problemas de concentración?':
          botResponse = 'Limitar las distracciones, establecer un ambiente de trabajo adecuado y tomar descansos regulares puede ayudarte a mejorar la concentración.';
          break;
        case 'me siento perdido en mi vida.':
          botResponse = 'Es normal sentirse perdido a veces. Tomar un tiempo para reflexionar sobre tus objetivos y hablar con alguien de confianza puede ser útil.';
          break;
        case '¿cómo puedo afrontar un duelo?':
          botResponse = 'Permítete sentir y expresar tus emociones. Hablar sobre tus sentimientos y buscar apoyo puede ayudarte en el proceso de duelo.';
          break;
        case '¿es normal tener miedo al futuro?':
          botResponse = 'Sí, es común sentir incertidumbre sobre el futuro. Enfocarte en lo que puedes controlar y establecer metas realistas puede ayudarte a sentirte mejor.';
          break;
        case '¿cómo puedo motivarme para hacer ejercicio?':
          botResponse = 'Encuentra una actividad que disfrutes, establece metas alcanzables y considera hacer ejercicio con un amigo para mantenerte motivado.';
          break;
        case '¿qué puedo hacer si no puedo dejar de pensar en algo?':
          botResponse = 'Practicar la atención plena y distraerte con actividades agradables puede ayudar. Si persiste, hablar con un profesional puede ser beneficioso.';
          break;
        default:
          botResponse = 'Lo siento, no tengo una respuesta para eso. Pero estoy aquí para ayudarte. ¿Te gustaría hablar de otra cosa?';
      }

      // Add bot response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: botResponse }
        ]);
      }, 500);

      setInput(''); // Clear input after sending
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
          </div>
        )}
      </div>

      <div className="chat-container">
        <div className="welcome-message bot-message">
          <img src="assets/images/general.png" alt="User Icon" className="message-icon"/>
          <span>Bienvenido/a, Dime como puedo ayudarte!</span>
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
            placeholder="Dime como puedo ayudarte?"
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

export default AgenteGeneral;
