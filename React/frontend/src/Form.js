import React, { useState } from 'react';
import './index.css';
import './Form.css';
import Modal from 'react-modal';
import axios from 'axios';

function Formulario({ setAuto, closeModal }) {
  const [autoData, setAutoData] = useState({
    patente: '',
    ubicacion: '',
    disponibilidad: '',
    modelo: '',
    limpio: '',
  });

  const handleChange = (e) => {
    setAutoData({
      ...autoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      patente: autoData.patente,
      fkUbicacion: autoData.ubicacion,
      disponibilidad: autoData.disponibilidad,
      modelo: autoData.modelo,
      limpio: autoData.limpio,
    };

    axios
      .post('http://localhost:5000/autos/', data)
      .then((response) => {
        console.log(response.data);
        setAuto(response.data);
        closeModal();
        window.location.reload()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>Patente</label>
          <input type="text" name="patente" onChange={handleChange} required />

          <label>Ubicacion</label>
          <select name="ubicacion" onChange={handleChange} required>
            <option value="1">Chalten</option>
            <option value="2">Galpon</option>
            <option value="3">Aeropuerto</option>
          </select>

          <label>Disponibilidad</label>
          <input type="text" name="disponibilidad" onChange={handleChange} />

          <label>Modelo</label>
          <input type="text" name="modelo" onChange={handleChange} />

          <label>Limpio</label>
          <input type="text" name="limpio" onChange={handleChange} />

          <button type="submit">Agregar Auto</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;