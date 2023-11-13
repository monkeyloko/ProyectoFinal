import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormEditContrato({ setContrato, closeModal }) {
    const { idContrato } = useParams();
    const [contratoActual, setContratoActual] = useState({});
    const [contratoData, setContratoData] = useState({
        precio: '',
        fechaAlquilado: '',
        fechaDevolucion: '',
        fkCliente: '', // ejemplo de campo adicional
        fkAuto: '',    // ejemplo de campo adicional
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
            .put(`http://localhost:5000/contrato/${idContrato}`, data)
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
        // Realiza la solicitud HTTP o accede a tus datos para obtener los detalles del contrato según el ID
        fetch(`http://localhost:5000/contrato/${idContrato}`)
            .then((response) => response.json())
            .then((contratoJson) => {
                console.log("contrato", contratoJson);
                setContratoActual(contratoJson);

                // Inicializa el estado con los valores actuales del contrato
                setContratoData({
                    precio: contratoJson.precio,
                    fechaAlquilado: contratoJson.fechaAlquilado,
                    fechaDevolucion: contratoJson.fechaDevolucion,
                    fkCliente: contratoJson.fkCliente,
                    fkAuto: contratoJson.fkAuto,
                    id_dañoEntrega: contratoJson.id_dañoEntrega,
                    id_dañoDevolucion: contratoJson.id_dañoDevolucion,
                    ubicacionEntrega: contratoJson.ubicacionEntrega,
                    ubicacionDevolucion: contratoJson.ubicacionDevolucion,

                });
            });
    }, [idContrato]);

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <label>Precio</label>
                    <input
                        type="number"
                        name="precio"
                        onChange={handleChange}
                        required
                        value={contratoData.precio}
                    />

                    <label>Fecha de Entrega</label>
                    <input
                        type="date"
                        name="fechaAlquilado"
                        onChange={handleChange}
                        required
                        value={contratoData.fechaAlquilado}
                    />

                    <label>Fecha de Devolucion</label>
                    <input
                        type="date"
                        name="fechaDevolucion"
                        onChange={handleChange}
                        required
                        value={contratoData.fechaDevolucion}
                    />

                    <label>Ubicacion Entrega</label>
                    <select name="ubicacionEntrega" onChange={handleChange} required value={contratoData.ubicacionEntrega}>
                        <option value="">Selecciona una ubicacion</option>
                        <option value="1">Chalten</option>
                        <option value="2">Galpon</option>
                        <option value="3">Aeropuerto</option>
                    </select>

                    <label>Ubicacion Devolucion</label>
                    <select name="ubicacionDevolucion" onChange={handleChange} required value={contratoData.ubicacionDevolucion}>
                        <option value="">Selecciona una ubicacion</option>
                        <option value="1">Chalten</option>
                        <option value="2">Galpon</option>
                        <option value="3">Aeropuerto</option>
                    </select>


                    <button type="submit">Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}

export default FormEditContrato;
