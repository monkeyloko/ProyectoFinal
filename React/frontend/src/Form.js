import React, { useState } from 'react'
import './index.css';



function Formulario({ setAutos, autos }) {

    const agarrarDatos = (e) => {
        e.preventDefault();

        setAutos([
            ...autos,
            {
                patente: e.target.patente.value,
                ubicacion: e.target.fkUbicacion.value,
                disponibilidad: e.target.disponibilidad.value,
                modelo: e.target.modelo.value,
                limpio: e.target.limpio.value
            }
        ])

    }


    return (
        <form onSubmit={agarrarDatos}>
            <label>Patente</label>
            <input type="text" name="patente" className="u-full-width" placeholder="Patente"></input>

            <label>Ubicacion</label>
            <select name ="fkUbicacion">
                <option value="1">Chalten</option>
                <option value="2">Galpon</option>
                <option value="3">Aeropuerto</option>
            </select>

            <label>Disponibilidad</label>
            <input type="text" name="disponibilidad" className="u-full-width"></input>

            <label>Modelo</label>
            <input type="text" name="modelo" className="u-full-width"></input>

            <label>Limpio</label>
            <textarea name="limpio" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Auto</button>
        </form>
    );
}
export default Formulario;