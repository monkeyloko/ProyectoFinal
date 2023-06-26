import React, { useState } from 'react'
import './index.css';
import './Form.css'
import axios from 'axios';


function Formulario() {

  function handleExit() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    window.location.reload()
}

    const [auto, setAuto] = useState({
      patente: '',
      ubicacion: '',
      disponibilidad: '',
      modelo: '',
      limpio: '',
    });
    
    const handleChange = (e) => {
      setAuto({
        ...auto,
        [e.target.name]: e.target.value,
      });

    };
    
    const handleSubmit = (e) => {
      e.preventDefault();  
      let data = JSON.stringify({
            patente: auto.patente,
            fkUbicacion: auto.ubicacion,
            disponibilidad: auto.disponibilidad,
            modelo: auto.modelo,
            limpio: auto.limpio

        });
        console.log(data.patente);
        //axios.post('http://localhost:5000/autos/', data);
        fetch("http://localhost:5000/autos/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: data
        })
        console.log(auto.modelo);
    };
    

    return (
      <div className="form-container">
      <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <label>Patente</label>
        <input type="text" name="patente" onChange={handleChange} required/>
  
        <label>Ubicacion</label>
        <select name="ubicacion" onChange={handleChange}>
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
  
        <button type="submit" onClick={handleExit}>Agregar Auto</button>
      </form>
      </div>
      </div>
    );
  }
  
  export default Formulario;