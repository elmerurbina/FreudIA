import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css'; // Import your CSS file

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nombres: '',
    apellidos: '',
    pais: '',
    departamento: '',
    municipio: '',
    fechaNacimiento: '',
    perfilFoto: null,
    estadoPsicologico: ''
  });

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false
  });

  const [countries, setCountries] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  // Load countries from an API using Axios
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://your-api-endpoint/countries'); // Replace with your actual API endpoint
        setCountries(response.data); // Assuming the API returns an array of countries
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Load departments based on the selected country
  useEffect(() => {
    const fetchDepartamentos = async () => {
      if (formData.pais) {
        try {
          const response = await axios.get(`https://your-api-endpoint/departamentos/${formData.pais}`); // Replace with your actual API endpoint
          setDepartamentos(response.data); // Assuming the API returns an array of departments
        } catch (error) {
          console.error('Error fetching departments:', error);
        }
      } else {
        setDepartamentos([]);
      }
    };
    fetchDepartamentos();
  }, [formData.pais]);

  // Validate password strength
  useEffect(() => {
    const { password } = formData;
    setPasswordValidation({
      length: password.length >= 8,
      upperCase: /[A-Z]/.test(password),
      lowerCase: /[a-z]/.test(password),
      number: /\d/.test(password)
    });
  }, [formData.password]);

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, perfilFoto: e.target.files[0] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container-signup">
      <h2>Sign Up</h2>
      {step === 1 && (
        <form onSubmit={handleNextStep}>
          <h3>Datos Generales</h3>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña *"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="password-requirements">
              <p className={passwordValidation.length ? 'valid' : 'invalid'}>
                {passwordValidation.length ? '✔' : '✖'} Al menos 8 caracteres
              </p>
              <p className={passwordValidation.upperCase ? 'valid' : 'invalid'}>
                {passwordValidation.upperCase ? '✔' : '✖'} Una letra mayúscula
              </p>
              <p className={passwordValidation.lowerCase ? 'valid' : 'invalid'}>
                {passwordValidation.lowerCase ? '✔' : '✖'} Una letra minúscula
              </p>
              <p className={passwordValidation.number ? 'valid' : 'invalid'}>
                {passwordValidation.number ? '✔' : '✖'} Un número
              </p>
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar Contraseña *"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Siguiente</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNextStep}>
          <h3>Información Personal</h3>
          <div className="form-group">
            <input
              type="text"
              id="nombres"
              name="nombres"
              placeholder="Nombres *"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              placeholder="Apellidos *"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona un País *</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select
              id="departamento"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona un Departamento *</option>
              {departamentos.map((departamento, index) => (
                <option key={index} value={departamento}>{departamento}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Siguiente</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3>Información Adicional</h3>
          <div className="form-group">
            <input type="file" id="perfilFoto" name="perfilFoto" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <textarea
              id="estadoPsicologico"
              name="estadoPsicologico"
              placeholder="Describe tu estado psicológico actual"
              value={formData.estadoPsicologico}
              onChange={handleChange}
            />
            <Link to="#" className="soft-link">Llenar este apartado después</Link>
          </div>
          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Crear Cuenta</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
