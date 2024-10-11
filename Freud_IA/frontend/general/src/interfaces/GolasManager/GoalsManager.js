import React, { useState } from 'react';
import './GoalsManager.css'; // Import custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faList, faRobot, faTimes} from '@fortawesome/free-solid-svg-icons';
import AgenteObjetivos from '../AgentesIA/AgenteObjetivos'; // Import AgenteObjetivos component

const GoalsManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [goal, setGoal] = useState('');
  const [category, setCategory] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reminder, setReminder] = useState('');
  const [description, setDescription] = useState('');
  const [showAgenteObjetivos, setShowAgenteObjetivos] = useState(false); // State to manage AgenteObjetivos visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle goal creation logic here
    console.log({
      goal,
      category,
      startTime,
      endTime,
      startDate,
      endDate,
      reminder,
      description,
    });
    // Reset form after submission
    setGoal('');
    setCategory('');
    setStartTime('');
    setEndTime('');
    setStartDate('');
    setEndDate('');
    setReminder('');
    setDescription('');
    setShowForm(false); // Hide the form after submission
  };

  const handleBotIconClick = () => {
    setShowAgenteObjetivos((prev) => !prev); // Toggle AgenteObjetivos visibility when the icon is clicked
  };

  return (
    <div className="goals-container">
      <h2>Gestionar Metas</h2>

      {/* Action Buttons */}
      <div className="actions">
        <button className="create-goal" onClick={() => setShowForm(!showForm)}>
          <FontAwesomeIcon icon={faPlus}/> Crear una nueva meta
        </button>

        <button className="access-goals">
          <FontAwesomeIcon icon={faList}/> Acceder a mis metas
        </button>

      </div>

      {/* Goal Creation Form - Hidden Initially */}
      {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="goal">Nombre de la Meta:</label>
            <input
              type="text"
              id="goal"
              name="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Escribe tu meta"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría:</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="Salud">Salud</option>
              <option value="Trabajo">Trabajo</option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Fecha de inicio:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Selecciona la fecha de inicio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">Fecha de finalización:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="Selecciona la fecha de finalización"
            />
          </div>

          <div className="form-group">
            <label htmlFor="startTime">Hora de inicio:</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">Hora de finalización:</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Describir tu objetivo con todos sus aspectos claves:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe tu objetivo"
              required
            />
          </div>

          <div className="form-group">
            <label>Recordatorios:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="reminder"
                  value="morning"
                  checked={reminder === 'morning'}
                  onChange={(e) => setReminder(e.target.value)}
                />
                Cada mañana
              </label>
              <label>
                <input
                  type="radio"
                  name="reminder"
                  value="afternoon"
                  checked={reminder === 'afternoon'}
                  onChange={(e) => setReminder(e.target.value)}
                />
                Cada tarde
              </label>
            </div>
          </div>

          <div className="button">
            <button type="submit">Crear Meta</button>
          </div>
        </form>
      )}

      {/* Help icon at the bottom right */}
      <div className="help-icon" onClick={handleBotIconClick}>
        <span className="help-hover-text">
          Necesitas ayuda sobre cómo planear tus metas? <br />
          Comunícate con nuestro agente para recibir ayuda personalizada.
        </span>
        <FontAwesomeIcon icon={faRobot} className="bot-icon" />
      </div>

      {/* Render AgenteObjetivos if the bot icon is clicked */}
     {showAgenteObjetivos && (
  <div className="agente-objetivos">
    <span className="tooltip">
      <button
        className="close-button"
        onClick={() => setShowAgenteObjetivos(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <span className="tooltiptext">Cerrar bot</span> {/* Tooltip text */}
    </span>
    <AgenteObjetivos />
  </div>
)}

    </div>
  );
};

export default GoalsManager;
