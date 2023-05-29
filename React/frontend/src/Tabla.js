import React from 'react';
import { useEffect, useState } from "react";
import './Tabla.css' 
const Tabla = () => {

    const [autos, setAutos] =  useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/autos/")
          .then((response) => response.json())
          .then((autosJson) => {
            console.log("autos",autosJson)
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
          <th>Disponible</th>
          <th>Estado</th>
          <th>Daños</th>
          <th>En arreglo</th>
         
        </tr>
      </thead>
      <tbody>
        {!isLoading &&
          autos.map((auto) => (
            <tr key = {auto.idAuto}>
            <td>{auto.patente}</td> 
            <td>{auto.modelo}</td>
            <td>{auto.fkUbicacion}</td>
            <td>{auto.disponibilidad}</td>
            <td>{auto.limpio}</td>
            <td>dou</td>
            <td>dou</td>
            <td>dou</td>
          </tr>

          ))

        }
      </tbody>
    </table>
    </div>
  );
};

export default Tabla;