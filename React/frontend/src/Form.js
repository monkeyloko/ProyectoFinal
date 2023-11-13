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
       // window.location.reload()
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
            <option value="">Selecciona una ubicacion</option>
            <option value="1">Chalten</option>
            <option value="2">Galpon</option>
            <option value="3">Aeropuerto</option>
          </select>

          <label>Disponibilidad</label>

          <select name="disponibilidad" onChange={handleChange} required>
            <option value="">Selecciona una disponibilidad</option>
            <option value="Esta disponible">Esta disponible</option>
            <option value="Esta alquilado">Esta alquilado</option>

          </select>
          <label>Modelo</label>
          <input type="text" name="modelo" onChange={handleChange} />

          <label>Limpio</label>

          <select name="limpio" onChange={handleChange} required>
            <option value="">Selecciona un estado</option>
            <option value="1">Esta limpio</option>
            <option value="0">No esta limpio</option>

          </select>

          <button type="submit">Agregar Auto</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;