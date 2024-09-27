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
          <li className="title" onClick={toggleTerms}>Términos y Condiciones de Uso</li>
          {showTerms && (
            <div className="content">
              <h3>Términos y Condiciones de Uso</h3>
              <p>
                Bienvenido a Freud IA, una plataforma dedicada a ofrecer herramientas de salud mental basadas en inteligencia
                artificial. Al acceder y utilizar nuestros servicios, usted acepta los siguientes términos y condiciones:
              </p>
              <ul>
                <li><strong>Propósito del Servicio:</strong> Freud IA proporciona acceso a recursos psicológicos y promueve el bienestar emocional.</li>
                <li><strong>Uso Responsable:</strong> Los usuarios deben utilizar la plataforma de manera ética y respetuosa.</li>
                <li><strong>Colaboraciones:</strong> Freud IA colabora con clínicas, proveedores de seguros, farmacias y psicólogos certificados.</li>
                <li><strong>Datos Personales y Seguridad:</strong> La información de los usuarios está protegida y encriptada.</li>
                <li><strong>Uso Sostenible:</strong> Contribuyes a la sostenibilidad al acceder a recursos psicológicos sin transportarte físicamente.</li>
                <li><strong>Responsabilidad Económica y Social:</strong> Freud IA se compromete con la sostenibilidad financiera y social.</li>
              </ul>
            </div>
          )}
          <li className="title" onClick={togglePrivacy}>Privacidad</li>
          {showPrivacy && (
            <div className="content">
              <h3>Política de Privacidad</h3>
              <p>
                En Freud IA, tu privacidad es de suma importancia. Nos comprometemos a proteger los datos personales de nuestros usuarios
                y a garantizar un entorno seguro para la interacción con nuestra plataforma.
              </p>
              <ul>
                <li><strong>Recopilación de Datos:</strong> Solo recopilamos la información necesaria para ofrecer nuestros servicios.</li>
                <li><strong>Protección y Seguridad de los Datos:</strong> Tus datos están protegidos mediante encriptación en nuestra base de datos PostgreSQL.</li>
                <li><strong>No Compartimos Datos con Terceros:</strong> Nos comprometemos a no compartir, vender ni ceder los datos personales a terceros.</li>
                <li><strong>Acceso Sostenible:</strong> Al utilizar Freud IA, reduces tu huella de carbono al no requerir transporte físico.</li>
                <li><strong>Derechos del Usuario:</strong> Tienes derecho a acceder, rectificar o eliminar tus datos en cualquier momento.</li>
                <li><strong>Modificaciones:</strong> Nos reservamos el derecho de modificar esta política para mejorar la seguridad.</li>
              </ul>
            </div>
          )}
          <li className="title" onClick={toggleManual}>Manual de Uso</li> {/* New Manual de Uso section */}
          {showManual && (
            <div className="content">
              <h3>Manual de Uso</h3>
              <p>
                Este manual proporciona instrucciones sobre cómo utilizar nuestra plataforma de manera efectiva. Aquí hay algunos puntos clave:
              </p>
              <ul>
                <li><strong>Registro:</strong> Crea una cuenta para acceder a todas las funcionalidades.</li>
                <li><strong>Navegación:</strong> Explora las diferentes secciones utilizando el menú principal.</li>
                <li><strong>Soporte:</strong> Si necesitas ayuda, visita la sección de contacto o consulta nuestro FAQ.</li>
                <li><strong>Seguridad:</strong> Asegúrate de utilizar contraseñas seguras y no compartas tus credenciales.</li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
      <p className="copyright">&copy; {new Date().getFullYear()} Freud IA. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
