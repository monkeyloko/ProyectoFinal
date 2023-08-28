import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

function FormContrato({ setContrato, closeModal }) {
    const [contratoData, setContratoData] = useState({
        precio: '',
        fechaAlquilado: '',
        fechaDevolucion: '',
        fkCliente: '',
        fkAuto: '',
        id_dañoEntrega: '',
        id_dañoDevolucion: '',
        ubicacionEntrega: '',
        ubicacionDevolucion: '',
    });

    const handleChange = (e) => {
        setContratoData({
            ...contratoData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            precio: autoData.precio,
            fechaAlquilado: autoData.fechaAlquilado,
            fechaDevolucion: autoData.fechaDevolucion,
            fkCliente: autoData.fkCliente,
            fkAuto: autoData.fkAuto,
            id_dañoEntrega: autoData.id_dañoEntrega,
            id_dañoDevolucion: autoData.id_dañoDevolucion,
            ubicacionEntrega: autoData.ubicacionEntrega,
            ubicacionDevolucion: autoData.ubicacionDevolucion,
        };

        axios
            .post('http://localhost:5000/contrato/', data)
            .then((response) => {
                console.log(response.data);
                setContrato(response.data);
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
                    <label>Precio</label>
                    <input type="number" name="precio" onChange={handleChange} required />

                    <label>Fecha Alquilado</label>
                    <input type="date" name="fechaAlquilado" onChange={handleChange} required />


                    <label>Fecha Devolucion</label>
                    <input type="date" name="fechaDevolucion" onChange={handleChange} required />

                    <label>fkCliente</label>
                    <input type="text" name="modelo" onChange={handleChange} />

                    <label>Limpio</label>

                    <select name="limpio" onChange={handleChange} required>
                        <option value="1">Esta limpio</option>
                        <option value="0">No esta limpio</option>

                    </select>

                    <button type="submit">Agregar Auto</button>
                </form>
            </div>
        </div>
    );
}

export default FormContrato;