import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li>Contacto</li>
          <li>Términos y Condiciones de Uso</li>
          <li>Términos de Privacidad</li>
          <li>Manual de Uso</li>
        </ul>
      </nav>
      <p className="copyright">&copy; {new Date().getFullYear()} Frued IA. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
