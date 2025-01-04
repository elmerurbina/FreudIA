import React, { useState, useEffect } from 'react';
import './Notifications.css'; // Assuming you have your styles in App.css

const NotificationSettings = () => {
  const [interval, setInterval] = useState('daily');
  const [times, setTimes] = useState([]);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [countries, setCountries] = useState([]);

  // Fetch the country codes from the public directory
  useEffect(() => {
    fetch('/country-codes.json')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error loading country codes:', error));
  }, []);

  const handleAddTime = () => {
    setTimes([...times, '']);
  };

  const handleTimeChange = (index, value) => {
    const newTimes = [...times];
    newTimes[index] = value;
    setTimes(newTimes);
  };

  const handleRemoveTime = (index) => {
    const newTimes = times.filter((_, i) => i !== index);
    setTimes(newTimes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      interval,
      times,
      whatsappNumber: `${selectedCountryCode} ${whatsappNumber}`,
    });
    // Here, you'd send the interval, times, and full WhatsApp number to the backend or local storage
  };

  return (
    <div className="settings-container">
      <h2>Configuración de Notificaciones</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="whatsapp-number">Número de WhatsApp para recibir los mensajes motivacionales:</label>
        <div className="whatsapp-input-group">
          <select
            id="country-code"
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
            required
          >
            <option value="">Selecciona el código del país</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.country} ({country.code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="whatsapp-number"
            placeholder="Ingresa tu número de WhatsApp"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            required
          />
        </div>

        <label htmlFor="interval">Selecciona un intervalo:</label>
        <select
          id="interval"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        >
          <option value="daily">Diario</option>
          <option value="hourly">Cada hora</option>
          <option value="every_3_hours">Cada 3 horas</option>
          <option value="custom">Personalizar</option>
        </select>

        <div className="times-section">
          <label>Elige un horario personalizado (formato 24-hora):</label>
          {times.map((time, index) => (
            <div key={index} className="time-input">
              <input
                type="time"
                value={time}
                onChange={(e) => handleTimeChange(index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveTime(index)}>
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTime} className="add-time-btn">
            Agrega un horario
          </button>
        </div>

        <button type="submit" className="btn-primary">Guardar configuraciones</button>
      </form>
    </div>
  );
};

export default NotificationSettings;
