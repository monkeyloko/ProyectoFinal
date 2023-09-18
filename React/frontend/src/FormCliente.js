import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function FormCliente({ setCliente, closeModal }) {
    const [isLoading, setIsLoading] = useState(false);

    const [clienteData, setClienteData] = useState({
        nombreCompleto: '',
        dni: '',
        telefono: '',
    });

    const handleChange = (e) => {
        setClienteData({
            ...clienteData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nombreCompleto: clienteData.nombreCompleto,
            dni: clienteData.dni,
            telefono: clienteData.telefono,
        };

        axios
            .post('http://localhost:5000/cliente/', data)
            .then((response) => {
                console.log(response.data);
                setCliente(response.data);
                closeModal();
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };




    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <label>Nombre y Apellido</label>
                    <input type="text" name="nombreCompleto" onChange={handleChange} required />

                    <label>DNI</label>
                    <input type="number" name="dni" onChange={handleChange} required />

                    <label>Telefono</label>
                    <input type="text" name="telefono" onChange={handleChange} required />

                    <button type="submit">Crear Cliente</button>
                </form>
            </div>
        </div>
    );
}

export default FormCliente;
