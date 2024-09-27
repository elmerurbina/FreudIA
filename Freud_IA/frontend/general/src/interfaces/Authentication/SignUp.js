import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const [emailValid, setEmailValid] = useState(true); // New state for email validation
  const [ageValid, setAgeValid] = useState(true); // New state for age validation
  const [countries, setCountries] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  // Load countries from local JSON file
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/countries.json'); // Load local JSON file
        const data = await response.json();
        setCountries(data); // Set countries from JSON data
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Load departments based on the selected country
  useEffect(() => {
    const fetchDepartamentos = () => {
      if (formData.pais) {
        fetch('/cities.json')
          .then((response) => response.json())
          .then((data) => {
            setDepartamentos(data[formData.pais] || []); // Get departments based on selected country
          })
          .catch((error) => console.error('Error fetching departments:', error));
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

  // Validate email format
  useEffect(() => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValid(emailRegex.test(formData.email));
    };
    validateEmail();
  }, [formData.email]);

  // Validate age
  useEffect(() => {
    const validateAge = () => {
      const birthDate = new Date(formData.fechaNacimiento);
      const age = new Date().getFullYear() - birthDate.getFullYear();
      setAgeValid(age > 10);
    };
    validateAge();
  }, [formData.fechaNacimiento]);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && !emailValid) {
      alert('Por favor, ingresa un correo electrónico válido.'); // Alert for invalid email
      return;
    }
    if (step === 2 && !ageValid) {
      alert('Debes tener más de 10 años para registrarte.'); // Alert for invalid age
      return;
    }
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
            {!emailValid && <p className="invalid">Email inválido</p>} {/* Show invalid email message */}
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
            {formData.password && formData.confirmPassword && (
              <p className={formData.password === formData.confirmPassword ? 'valid' : 'invalid'}>
                {formData.password === formData.confirmPassword ? '✔ Las contraseñas coinciden' : '✖ Las contraseñas no coinciden'}
              </p>
            )}
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
              <option value="" disabled>Selecciona tu Ciudad *</option>
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
            {!ageValid && <p className="invalid">Debes tener más de 10 años</p>} {/* Show age message */}
          </div>
          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Siguiente</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3>Información Adicional</h3>
          <div className="form-group">
            <label htmlFor="perfilFoto">Foto de Perfil (archivos permitidos: jpg, png, jpeg):</label>
            <input
              type="file"
              id="perfilFoto"
              name="perfilFoto"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="estadoPsicologico"
              name="estadoPsicologico"
              placeholder="Describe tu Estado psicológico *"
              value={formData.estadoPsicologico}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Registrar</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
