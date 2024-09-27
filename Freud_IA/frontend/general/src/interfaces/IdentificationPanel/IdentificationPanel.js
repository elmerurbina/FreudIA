import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to access passed state
import './IdentificationPanel.css';


const IdentificationPanel = () => {
  const [license, setLicense] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation(); // Access the clicked item from the state
  const navigate = useNavigate(); // For navigation after submission

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!license) {
      setErrorMessage('Por favor ingrese su Licencia o Código de Identificación');
    } else {
      setErrorMessage('');

      // Based on the clicked item, you can navigate to different pages after submission
      const clickedItem = location.state?.clickedItem; // Safe access to clickedItem

      switch (clickedItem) {
        case 'Contactar un Psicologo':
          navigate('/psicologos/contacto');
          break;
        case 'Perfil':
          navigate('/psicologos/perfil');
          break;
        case 'Reportes':
          navigate('/psicologos/reportes');
          break;
        case 'Directiva':
          navigate('/psicologos/directiva');
          break;
        case 'Aseguradoras':
          navigate('/socios/aseguradoras');
          break;
        case 'Clinicas':
          navigate('/socios/clinicas');
          break;
        case 'Farmacias':
          navigate('/socios/farmacias');
          break;
        default:
          navigate('/'); // Fallback to home if no match
      }
    }
  };

  return (
    <div className="identification-container">
      {errorMessage && <div className="message error">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="license">Ingrese su Licencia de Psicólogo o Código de Identificación:</label>
          <input
            type="text"
            id="license"
            name="license"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            placeholder="Licencia o Código"
            required
          />
        </div>

        <div className="button">
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default IdentificationPanel;
