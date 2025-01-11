import React, { useState } from 'react';
import './Expediente.css';


const Expediente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formsVisible, setFormsVisible] = useState({
    addPrescriptionForm: false,
    addDiagnosticTestForm: false,
    addMedicalHistoryForm: false
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleFormToggle = (formName) => {
    setFormsVisible({
      ...formsVisible,
      [formName]: !formsVisible[formName]
    });
  };

  // Replace these with actual data fetching logic or props
  const patientInfo = {
    nombre: 'John Doe',
    edad: 30,
    historial_medico: [{ fecha: '2023-01-01', descripcion: 'Checkup' }],
    recetas: [{ fecha: '2023-01-10', medicamento: 'Paracetamol' }],
    pruebas_diagnosticas: [{ fecha: '2023-01-12', prueba: 'Blood Test', resultado: 'Normal' }]
  };

  return (
    <div className="container">
        <div className="button-container">
          <button className="add-button" onClick={() => handleFormToggle('addPrescriptionForm')}>Agregar Receta</button>
          <button className="add-button" onClick={() => handleFormToggle('addDiagnosticTestForm')}>Agregar Prueba Diagnóstica</button>
          <button className="add-button" onClick={() => handleFormToggle('addMedicalHistoryForm')}>Agregar Historial Médico</button>
        </div>

      {isModalOpen && (
        <div className="modal" id="passkeyModal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>&times;</span>
            <p>Introduce la clave de acceso:</p>
            <input type="password" id="passkeyInput" placeholder="Clave de acceso" />
            <button id="passkeySubmit">Enviar</button>
            <div id="error-message" className="error-message"></div>
          </div>
        </div>
      )}

      <div id="formsContainer">
        {formsVisible.addPrescriptionForm && (
          <form id="addPrescriptionForm" className="entry-form">
            <h3>Agregar Receta</h3>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required />
            <label htmlFor="medicamento">Medicamento:</label>
            <input type="text" id="medicamento" name="medicamento" required />
            <button className="secondary-button" type="submit">Agregar Receta</button>
          </form>
        )}

        {formsVisible.addDiagnosticTestForm && (
          <form id="addDiagnosticTestForm" className="entry-form">
            <h3>Agregar Prueba Diagnóstica</h3>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required />
            <label htmlFor="prueba">Prueba:</label>
            <input type="text" id="prueba" name="prueba" required />
            <label htmlFor="resultado">Resultado:</label>
            <input type="text" id="resultado" name="resultado" required />
            <button className="secondary-button" type="submit">Agregar Prueba Diagnóstica</button>
          </form>
        )}

        {formsVisible.addMedicalHistoryForm && (
          <form id="addMedicalHistoryForm" className="entry-form">
            <h3>Agregar Historial Médico</h3>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required />
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" required></textarea>
            <button className="secondary-button" type="submit">Agregar Historial Médico</button>
          </form>
        )}
      </div>

      <section id="patientInformation">
        <h2>Información del Paciente</h2>
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>{patientInfo.nombre}</td>
            </tr>
            <tr>
              <th>Edad</th>
              <td>{patientInfo.edad} años</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="medicalHistory">
        <h2>Historial Médico</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {patientInfo.historial_medico.map((entry, index) => (
              <tr key={index}>
                <td>{entry.fecha}</td>
                <td>{entry.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="prescriptions">
        <h2>Recetas</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Medicamento</th>
            </tr>
          </thead>
          <tbody>
            {patientInfo.recetas.map((entry, index) => (
              <tr key={index}>
                <td>{entry.fecha}</td>
                <td>{entry.medicamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="diagnosticTests">
        <h2>Pruebas Diagnósticas</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Prueba</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {patientInfo.pruebas_diagnosticas.map((entry, index) => (
              <tr key={index}>
                <td>{entry.fecha}</td>
                <td>{entry.prueba}</td>
                <td>{entry.resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="frequentMessages">
        <h2>Mensajes Frecuentes</h2>
        <div className="message">
          <p>Aquí van los mensajes que el paciente escribe constantemente en el chat.</p>
        </div>
      </section>
    </div>
  );
};

export default Expediente;
