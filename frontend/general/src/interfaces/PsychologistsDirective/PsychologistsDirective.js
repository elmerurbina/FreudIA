import React, { useState } from 'react';
import './PyschologistsDirective.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faUserEdit, faUsers } from '@fortawesome/free-solid-svg-icons';

const PsychologistsDirective = () => {
  const [showDirectivos, setShowDirectivos] = useState(false);
  const [showPsicologos, setShowPsicologos] = useState(false);
  const [showDirectivoForm, setShowDirectivoForm] = useState(false);
  const [showPsicologoForm, setShowPsicologoForm] = useState(false);
  const [isEditingDirectivo, setIsEditingDirectivo] = useState(false);
  const [isEditingPsicologo, setIsEditingPsicologo] = useState(false);

  // Directivo Form Fields
  const [directivoName, setDirectivoName] = useState('');
  const [codigoAcceso, setCodigoAcceso] = useState('');

  // Psicologo Form Fields
  const [psicologoName, setPsicologoName] = useState('');
  const [psicologoApellido, setPsicologoApellido] = useState('');
  const [licencia, setLicencia] = useState('');
  const [estudios, setEstudios] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [palabrasClaves, setPalabrasClaves] = useState(['', '', '', '', '']);

  // Submit handlers
  const handleDirectivoSubmit = (e) => {
    e.preventDefault();
    if (isEditingDirectivo) {
      console.log("Directivo Edited:", { directivoName, codigoAcceso });
    } else {
      console.log("New Directivo Added:", { directivoName, codigoAcceso });
    }
    // Reset form
    setDirectivoName('');
    setCodigoAcceso('');
    setShowDirectivoForm(false);
  };

  const handlePsicologoSubmit = (e) => {
    e.preventDefault();
    if (isEditingPsicologo) {
      console.log("Psicologo Edited:", { psicologoName, psicologoApellido, licencia, estudios, experiencia, palabrasClaves });
    } else {
      console.log("New Psicologo Added:", { psicologoName, psicologoApellido, licencia, estudios, experiencia, palabrasClaves });
    }
    // Reset form
    setPsicologoName('');
    setPsicologoApellido('');
    setLicencia('');
    setEstudios('');
    setExperiencia('');
    setPalabrasClaves(['', '', '', '', '']);
    setShowPsicologoForm(false);
  };

  // Delete handlers
  const handleDeleteDirectivo = () => {
    const accessCode = prompt("Por favor, ingrese el código de acceso para eliminar:");
    if (accessCode) {
      console.log("Directivo Deleted with access code:", accessCode);
      // Add your delete logic here
    } else {
      console.log("Delete canceled");
    }
  };

  const handleDeletePsicologo = () => {
    const licenciaInput = prompt("Por favor, ingrese la licencia para eliminar:");
    if (licenciaInput) {
      console.log("Psicologo Deleted with license:", licenciaInput);
      // Add your delete logic here
    } else {
      console.log("Delete canceled");
    }
  };

  // Edit handlers
  const handleEditDirectivo = () => {
    setIsEditingDirectivo(true);
    setShowDirectivoForm(true);
    // Pre-fill the form fields with existing data (assuming the data is available)
    setDirectivoName('Existing Name');
    setCodigoAcceso('Existing Code');
  };

  const handleEditPsicologo = () => {
    setIsEditingPsicologo(true);
    setShowPsicologoForm(true);
    // Pre-fill the form fields with existing data (assuming the data is available)
    setPsicologoName('Existing Name');
    setPsicologoApellido('Existing Last Name');
    setLicencia('Existing License');
    setEstudios('Existing Studies');
    setExperiencia('Existing Experience');
    setPalabrasClaves(['Existing', 'Keywords']);
  };

  return (
    <div className="psychologists-directive-container">
      <h2>Directivos y Psicologos</h2>

      <div className="actions">
        <button className="expand-button" onClick={() => setShowDirectivos(!showDirectivos)}>
          <FontAwesomeIcon icon={faUsers} /> Directivos
        </button>
        {showDirectivos && (
          <div className="expandable-options">
            <button className="action-button" onClick={() => setShowDirectivoForm(!showDirectivoForm)}>
              <FontAwesomeIcon icon={faUserPlus} /> {showDirectivoForm ? 'Cerrar' : 'Agregar'}
            </button>
            <button className="action-button" onClick={handleDeleteDirectivo}>
              <FontAwesomeIcon icon={faUserMinus} /> Eliminar
            </button>
            <button className="action-button" onClick={handleEditDirectivo}>
              <FontAwesomeIcon icon={faUserEdit} /> Editar
            </button>

            {showDirectivoForm && (
              <form onSubmit={handleDirectivoSubmit}>
                <div className="form-group">
                  <label htmlFor="directivoName">Nombre:</label>
                  <input
                    type="text"
                    id="directivoName"
                    value={directivoName}
                    onChange={(e) => setDirectivoName(e.target.value)}
                    placeholder="Escribe el nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="codigoAcceso">Código de Acceso:</label>
                  <input
                    type="text"
                    id="codigoAcceso"
                    value={codigoAcceso}
                    onChange={(e) => setCodigoAcceso(e.target.value)}
                    placeholder="Escribe el código de acceso"
                    required
                  />
                </div>
                <button className="action-button" type="submit">{isEditingDirectivo ? 'Guardar Cambios' : 'Agregar Directivo'}</button>
              </form>
            )}
          </div>
        )}

        <button className="expand-button" onClick={() => setShowPsicologos(!showPsicologos)}>
          <FontAwesomeIcon icon={faUsers} /> Psicologos
        </button>
        {showPsicologos && (
          <div className="expandable-options">
            <button className="action-button" onClick={() => setShowPsicologoForm(!showPsicologoForm)}>
              <FontAwesomeIcon icon={faUserPlus} /> {showPsicologoForm ? 'Cerrar' : 'Agregar'}
            </button>
            <button className="action-button" onClick={handleDeletePsicologo}>
              <FontAwesomeIcon icon={faUserMinus} /> Eliminar
            </button>
            <button className="action-button" onClick={handleEditPsicologo}>
              <FontAwesomeIcon icon={faUserEdit} /> Editar
            </button>

            {showPsicologoForm && (
              <form onSubmit={handlePsicologoSubmit}>
                <div className="form-group">
                  <label htmlFor="psicologoName">Nombre:</label>
                  <input
                    type="text"
                    id="psicologoName"
                    value={psicologoName}
                    onChange={(e) => setPsicologoName(e.target.value)}
                    placeholder="Escribe el nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="psicologoApellido">Apellidos:</label>
                  <input
                    type="text"
                    id="psicologoApellido"
                    value={psicologoApellido}
                    onChange={(e) => setPsicologoApellido(e.target.value)}
                    placeholder="Escribe los apellidos"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="licencia">Licencia:</label>
                  <input
                    type="text"
                    id="licencia"
                    value={licencia}
                    onChange={(e) => setLicencia(e.target.value)}
                    placeholder="Escribe la licencia"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="estudios">Estudios Academicos:</label>
                  <input
                    type="text"
                    id="estudios"
                    value={estudios}
                    onChange={(e) => setEstudios(e.target.value)}
                    placeholder="Escribe los estudios"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experiencia">Experiencia:</label>
                  <input
                    type="text"
                    id="experiencia"
                    value={experiencia}
                    onChange={(e) => setExperiencia(e.target.value)}
                    placeholder="Escribe la experiencia"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="palabrasClaves">Palabras Claves:</label>
                  {palabrasClaves.map((palabra, index) => (
                    <input
                      key={index}
                      type="text"
                      value={palabra}
                      onChange={(e) => {
                        const newPalabras = [...palabrasClaves];
                        newPalabras[index] = e.target.value;
                        setPalabrasClaves(newPalabras);
                      }}
                      placeholder={`Palabra clave ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="action-button" type="submit">{isEditingPsicologo ? 'Guardar Cambios' : 'Agregar Psicologo'}</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PsychologistsDirective;
