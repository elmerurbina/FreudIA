import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showManual, setShowManual] = useState(false); // State for Manual de Uso

  const toggleContact = () => setShowContact(!showContact);
  const toggleTerms = () => setShowTerms(!showTerms);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);
  const toggleManual = () => setShowManual(!showManual); // Toggle for Manual de Uso

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li className="title" onClick={toggleContact}>Contacto</li>
          {showContact && (
              <div className="content">
                <p>Siguenos en nuestras redes sociales y si necesitas alguna informacion, no dudes en preguntar!</p>
                <div className="contact-info">
                  <a href="https://www.facebook.com/freudia24" className="icon facebook" title="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/@freud-ia" className="icon youtube" title="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://t.me/freud_ia" className="icon telegram" title="Telegram">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="mailto:freudiaweb@gmail.com" className="icon email" title="Email">
                    <i className="far fa-envelope"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/102857368/" className="icon linkedin" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://wa.me/1234567890" className="icon whatsapp" title="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
          )}
          <li className="title">
            <a href="https://elmerurbina.github.io/FreudIA/terminos_y_condiciones">Términos y Condiciones de Uso</a>
          </li>

          <li className="title">
            <a href="https://elmerurbina.github.io/FreudIA/privacidad" target="_blank"
               rel="noopener noreferrer">Privacidad</a>
          </li>

          <li className="title">
            <a href="https://elmerurbina.github.io/FreudIA/manual_usuario">Manual de Uso</a>
          </li>

        </ul>
      </nav>
      <p className="copyright">&copy; {new Date().getFullYear()} Freud IA. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
