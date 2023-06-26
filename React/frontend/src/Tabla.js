import React from 'react';
import { useEffect, useState } from "react";
import './Tabla.css'
const Tabla = () => {

  const handleClick=()=> {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    }

  const [autos, setAutos] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/autos/")
      .then((response) => response.json())
      .then((autosJson) => {
        console.log("autos", autosJson)
        setAutos(autosJson)
        setIsLoading(false)
      });
  }, []);



  return (
    <div className='container flex'>
      <table>
        <thead>
          <tr>

            <th>Patente</th>
            <th>Modelo</th>
            <th>Ubicacion</th>
            <th>Alquilado</th>
            <th>Estado</th>
            <th>Disponible</th>
            <th>Daños</th>
            <th>En arreglo</th>

          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            autos.map((auto) => (
              <tr key={auto.idAuto}>
                <td>{auto.patente}</td>
                <td>{auto.modelo}</td>
                <td>{auto.fkUbicacion}</td>
                <td>{auto.disponibilidad}</td>
                <td>{auto.limpio ? "Esta limpio" : "No esta limpio"}</td>
                <td>- -</td>
                <td>- -</td>
                <td>- -</td>
              </tr>

            ))
            
          }
          

        </tbody>
        
      </table>
      <button className='btn btn-primary' onClick={() => handleClick()}>Agregar Auto</button>
    </div>
    
  );
};

export default Tabla;