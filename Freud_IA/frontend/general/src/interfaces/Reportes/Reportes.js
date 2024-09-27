import React from 'react';
import './Reportes.css'; // Custom styles for Reportes

const Reportes = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="reportes-container">
      <h2 className="reportes-header">Enviar Reporte</h2>

      <form onSubmit={handleSubmit}>
        <div className="file-upload">
          <label htmlFor="report-file">Subir Reporte (docx o pdf):</label>
          <input
            type="file"
            id="report-file"
            name="report-file"
            accept=".docx, .pdf"
            required
          />
          <p className="file-format-note">El reporte debe ser enviado en formato .docx o .pdf.</p>
        </div>

        <div className="template-link">
          <p>
            <a
              href="/path/to/template.docx" // Update with the actual link to the template file
              target="_blank"
              rel="noopener noreferrer"
              className="template-download-link"
            >
              Utiliza esta plantilla para redactar tu reporte
            </a>
          </p>
        </div>

        <div className="button">
          <button type="submit" className="button">Subir</button>
        </div>
      </form>
    </div>
  );
};

export default Reportes;
