import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function FormContrato({ setContrato, closeModal }) {
    const [clientes, setClientes] = useState([]);
    const [autos, setAutos] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const [contratoData, setContratoData] = useState({
        precio: '',
        fechaAlquilado: '',
        fechaDevolucion: '',
        fkCliente: '', // Cambia esto a un string
        fkAuto: '',
        id_dañoEntrega: null,
        id_dañoDevolucion: null,
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
            precio: contratoData.precio,
            fechaAlquilado: contratoData.fechaAlquilado,
            fechaDevolucion: contratoData.fechaDevolucion,
            fkCliente: contratoData.fkCliente,
            fkAuto: contratoData.fkAuto,
            id_dañoEntrega: contratoData.id_dañoEntrega,
            id_dañoDevolucion: contratoData.id_dañoDevolucion,
            ubicacionEntrega: contratoData.ubicacionEntrega,
            ubicacionDevolucion: contratoData.ubicacionDevolucion,
        };

        axios
            .post('http://localhost:5000/contrato/', data)
            .then((response) => {
                console.log(response.data);
                setContrato(response.data);
                closeModal();
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetch('http://localhost:5000/cliente/')
            .then((response) => response.json())
            .then((clientesJson) => {
                console.log('clientes', clientesJson);
                setClientes(clientesJson);
                setIsLoading(false);
            });
            fetch('http://localhost:5000/autos/')
            .then((response) => response.json())
            .then((autosJson) => {
                console.log('clientes', autosJson);
                setAutos(autosJson);
                setIsLoading(false);
            });
    }, []);

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

                    <label>Cliente</label>
                    <select name="fkCliente" onChange={handleChange} required>
                        <option value="">Selecciona un cliente</option>
                        {clientes.map((cliente) => (
                            <option key={cliente.idCliente} value={cliente.idCliente}>
                                {cliente.nombreCompleto}
                            </option>
                        ))}
                    </select>

                    <label>Auto</label>
                    <select name="fkAuto" onChange={handleChange} required>
                        <option value="">Selecciona un auto</option>
                        {autos.map((auto) => (
                            <option key={auto.idAuto} value={auto.idAuto}>
                                {auto.patente}
                            </option>
                        ))}
                    </select>

                    <label>ubicacionEntrega</label>
                    <input type="number" name="ubicacionEntrega" onChange={handleChange} />

                    <label>ubicacionDevolucion</label>
                    <input type="number" name="ubicacionDevolucion" onChange={handleChange} />

                    <button type="submit">Crear Contrato</button>
                </form>
            </div>
        </div>
    );
}

export default FormContrato;
