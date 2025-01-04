import React, { useState, useEffect } from 'react';
import './SupportForm.css';

const SupportForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState(''); // Handle selected country code
    const [countries, setCountries] = useState([]); // Store country codes

    // Fetch the country codes from the public directory
    useEffect(() => {
        fetch('/country-codes.json')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error loading country codes:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="form-container">
            {errorMessage && <div className="message error">{errorMessage}</div>}
            {successMessage && <div className="message success">{successMessage}</div>}

            <form id="support-form" onSubmit={handleSubmit}>
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-group">
                            <label htmlFor="name-one">Nombre Completo 1:</label>
                            <input type="text" id="name-one" name="name-one" placeholder="Nombre Completo"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name-two">Nombre Completo 2:</label>
                            <input type="text" id="name-two" name="name-two" placeholder="Nombre Completo"/>
                        </div>
                        <p>Informacion del Psicólogo</p>
                        <div className="form-group">
                            <label htmlFor="psychologist-name">Nombre del psicólogo:</label>
                            <input type="text" id="psychologist-name" name="psychologist-name"
                                   placeholder="Nombre del psicólogo"/>
                        </div>
                    </div>

                    <div className="form-column">
                        <div className="form-group">
                            <label htmlFor="contact-one">Contacto 1: <i className="fas fa-handshake-angle"></i></label>
                            <select id="country-code-one" onChange={(e) => setSelectedCountryCode(e.target.value)}>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>{country.country} ({country.code})</option>
                                ))}
                            </select>
                            <input type="tel" id="contact-one" name="contact-one" required placeholder="Agregar contacto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-two">Contacto 2: <i className="fas fa-handshake-angle"></i></label>
                            <select id="country-code-two">
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>{country.country} ({country.code})</option>
                                ))}
                            </select>
                            <input type="tel" id="contact-two" name="contact-two" required placeholder="Agregar contacto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="psychologist-contact">Contacto del psicólogo: <i className="fas fa-user-doctor"></i></label>
                            <select id="psychologist-country-code">
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>{country.country} ({country.code})</option>
                                ))}
                            </select>
                            <input type="tel" id="psychologist-contact" name="psychologist-contact" placeholder="Agregar contacto" />
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button type="submit">Guardar</button>
                </div>

                <div className="links">
                    <a href="/profesionales" className="btn" id="search-psychologist">Buscar un psicologo</a>
                    <a href="/red-de-apoyo" className="btn" id="see-contact">Ver mi red de apoyo</a>
                    <a href="/notificaciones" className="btn" id="add-contact">Configurar notificaciones</a>
                </div>
            </form>
        </div>
    );
};

export default SupportForm;
