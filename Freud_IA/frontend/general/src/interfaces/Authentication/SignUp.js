import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



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
    <>
      <div className="auth-container">
        <h2>Crear Cuenta</h2>
        {step === 1 && (
          <form onSubmit={handleNextStep}>
            <h3>Generales</h3>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña *</label>
              <input
                type="password"
                id="password"
                name="password"
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
              <label htmlFor="confirmPassword">Confirmar Contraseña *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
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
              <label htmlFor="nombres">Nombres *</label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos *</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pais">País *</label>
              <select
                id="pais"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                required
              >
                {/* Populate countries dynamically */}
                <option value="Nicaragua">Nicaragua</option>
                {/* More countries */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="departamento">Departamento *</label>
              <select
                id="departamento"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                required
              >
                {/* Populate cities dynamically based on country */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
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
              <label htmlFor="perfilFoto">Foto de Perfil</label>
              <input type="file" id="perfilFoto" name="perfilFoto" onChange={handleFileChange} />
            </div>
            <div className="form-group">
              <label htmlFor="estadoPsicologico">Describe tu estado psicológico actual</label>
              <textarea
                id="estadoPsicologico"
                name="estadoPsicologico"
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

    </>
  );
};

export default SignUp;
