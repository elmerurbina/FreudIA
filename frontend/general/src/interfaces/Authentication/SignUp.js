import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    estadoPsicologico: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    plan: '',
    codigo_unico: ''
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
   const [cardValid, setCardValid] = useState(true); // New state for card number validation
  const [expirationValid, setExpirationValid] = useState(true); // New state for expiration date validation
  const [cvvValid, setCvvValid] = useState(true); // New state for CVV validation

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
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }
  if (step === 2 && !ageValid) {
    alert('Debes tener más de 10 años para registrarte.');
    return;
  }
  // Ensure valid card details before proceeding to payment step
  if (step === 6 && (!cardValid || !expirationValid || !cvvValid)) {
    alert('Por favor, ingresa información de tarjeta válida.');
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

  const handlePlanSelection = (selectedPlan) => {
    setFormData({ ...formData, plan: selectedPlan });
    if (selectedPlan === 'basic') {
      setStep(5); // Skip payment step and go to the summary
    } else {
      setStep(6); // Go to payment step
    }
  };

  const [showCodigoInput, setShowCodigoInput] = useState(false);

  const toggleCodigoInput = (e) => {
    e.preventDefault();
    setShowCodigoInput(!showCodigoInput);
  };

  const [showInsuranceInput, setShowInsuranceInput] = useState(false);
const [codigo, setCodigo] = useState('');
const [isCodigoValid, setIsCodigoValid] = useState(false);

const handleInsuranceToggle = (e) => {
  e.preventDefault();
  setShowInsuranceInput(!showInsuranceInput);
};

const handleCodigoChange = (e) => {
  const codigoIngresado = e.target.value;
  setCodigo(codigoIngresado);

  // Replace '123' with the actual valid code logic
  if (codigoIngresado === '123') {
    setIsCodigoValid(true);
  } else {
    setIsCodigoValid(false);
  }
};

// Validate credit card number using a basic regex (you could also use Luhn's algorithm for more accuracy)
  const validateCardNumber = (cardNumber) => {
    const cardRegex = /^\d{16}$/;
    setCardValid(cardRegex.test(cardNumber));
  };

  // Validate expiration date (ensure it's in the future)
  const validateExpirationDate = (expirationDate) => {
    const [month, year] = expirationDate.split('/').map(Number);
    const currentDate = new Date();
    const expiration = new Date(`20${year}`, month - 1); // Convert year to 4 digits
    setExpirationValid(expiration > currentDate);
  };

  // Validate CVV (3 or 4 digits)
  const validateCvv = (cvv) => {
    const cvvRegex = /^\d{3,4}$/;
    setCvvValid(cvvRegex.test(cvv));
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
                {formData.password === formData.confirmPassword
                  ? '✔ Las contraseñas coinciden'
                  : '✖ Las contraseñas no coinciden'}
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
            {!ageValid && <p className="invalid">Debes tener más de 10 años</p>} {/* Show age restriction */}
          </div>
          <div className="form-group">
            <textarea
              id="estadoPsicologico"
              name="estadoPsicologico"
              placeholder="Describe brevemente tu estado psicológico actual"
              value={formData.estadoPsicologico}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="perfilFoto">Subir Foto de Perfil:</label>
            <input
              type="file"
              id="perfilFoto"
              name="perfilFoto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Siguiente</button>
        </form>
      )}

      {step === 3 && (
  <div>
    <h3>Selecciona tu Plan</h3>
    <div className="plans">
      <div className="plan">
        <h2>Gratis</h2>
        <ul>
          <li>10 mensajes por día</li>
          <li>Acceso a psicólogos en línea</li>
          <li>Generación de expediente</li>
          <li>Historial de mensajes</li>
        </ul>
        <p><strong>Gratis</strong></p>
        <button
          onClick={() => handlePlanSelection('basic')} className="btn-primary">
          Continuar Gratis
        </button>
      </div>
      <div className="plan">
        <h2>Premium</h2>
        <ul>
          <li>50 mensajes por día</li>
          <li>Acceso a psicólogos en línea</li>
          <li>Notificaciones de frases motivacionales</li>
          <li>Generación de expediente</li>
          <li>Red de apoyo</li>
          <li>Historial de chat</li>
        </ul>
        <p><strong>$8/mes</strong></p>
        <p><strong>$80/año</strong></p>
        <button
          onClick={() => handlePlanSelection('premium')} className="btn-primary">
          Seleccionar
        </button>
      </div>
      <div className="plan">
        <h2>Pro</h2>
        <ul>
          <li>Medallas exclusivas en tu perfil cuando completes objetivos,
          medicaciones mandadas por tu psicologo/medico, 50%,70%,80%,>80% de tus palabras y/o expresiones son positivas, entre otros. </li>
          <li>Acceso a todas las funciones y/o beneficios del sistema de forma ilimitadas</li>
        </ul>
        <p><strong>$12/mes</strong></p>
        <p><strong>$120/año</strong></p>
        <button
          onClick={() => handlePlanSelection('pro')} className="btn-primary">
          Seleccionar
        </button>
      </div>
    </div>

    {/* Section for insurance company */}
    {/* Section for insurance company */}
<div className="aseguradora">
  <button
    id="aseguradora-link"
    onClick={handleInsuranceToggle}
    style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
  >
    ¿Eres parte de una compañía de seguros?
  </button>
  {showInsuranceInput && (
    <div className="form-group">
      <input
        type="text"
        id="codigo_unico"
        name="codigo_unico"
        placeholder="Código único"
        value={codigo || ''}
        onChange={handleCodigoChange}
      />
      {codigo && !isCodigoValid && (
        <p style={{ color: 'red' }}>Código inválido</p>
      )}
    </div>
  )}
</div>

    {/* Continue button, enabled only if code is valid */}
    <button
        onClick={handlePrevStep}
        className="btn-secondary"
    >
      Atrás
    </button>
    <button
        onClick={handleNextStep}
        className="btn-primary"
        disabled={!isCodigoValid}
    >
      Continuar
    </button>
  </div>
      )}

      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <h3>Resumen</h3>
          <p>Plan Seleccionado: {formData.plan}</p>
          <p>Email: {formData.email}</p>
          <p>Nombres: {formData.nombres}</p>
          <p>Apellidos: {formData.apellidos}</p>
          <p>País: {formData.pais}</p>
          <p>Ciudad: {formData.departamento}</p>
          <p>Fecha de Nacimiento: {formData.fechaNacimiento}</p>
          <p>Estado Psicológico: {formData.estadoPsicologico}</p>
          {formData.perfilFoto && <p>Foto de Perfil: {formData.perfilFoto.name}</p>}
          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Confirmar Registro</button>
        </form>
      )}
{step === 6 && (
  <form onSubmit={handleSubmit}>
    <h3>Información de Pago</h3>

    <div className="form-group">
      <label htmlFor="cardNumber">Número de Tarjeta *</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        placeholder="0000 0000 0000 0000"
        value={formData.cardNumber}
        onChange={handleChange}
        required
        pattern="\d{16}"
        title="Ingresa un número de tarjeta válido de 16 dígitos"
      />
    </div>

    <div className="form-group">
      <label htmlFor="expirationDate">Fecha de Expiración (MM/AA) *</label>
      <input
        type="text"
        id="expirationDate"
        name="expirationDate"
        placeholder="MM/AA"
        value={formData.expirationDate}
        onChange={handleChange}
        required
        pattern="\d{2}/\d{2}"
        title="Ingresa una fecha válida en formato MM/AA"
      />
    </div>

    <div className="form-group">
      <label htmlFor="cvv">CVV *</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        placeholder="123"
        value={formData.cvv}
        onChange={handleChange}
        required
        pattern="\d{3,4}"
        title="Ingresa un CVV válido de 3 o 4 dígitos"
      />
    </div>

          <button onClick={handlePrevStep} className="btn-secondary">Atrás</button>
          <button type="submit" className="btn-primary">Finalizar</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
