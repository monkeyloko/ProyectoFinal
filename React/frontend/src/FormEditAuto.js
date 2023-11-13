import React, { useEffect, useState } from 'react';
import './index.css';
import './Form.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Formulario({ setAuto, closeModal }) {
    const { idAuto } = useParams();
    const [autoActual, setAutoActual] = useState({});
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
            .put(`http://localhost:5000/autos/${idAuto}`, data)
            .then((response) => {
                console.log(response.data);
                setAuto(response.data);
                closeModal();
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        // Realiza la solicitud HTTP o accede a tus datos para obtener los detalles del auto según el ID
        fetch(`http://localhost:5000/autos/${idAuto}`)
            .then((response) => response.json())
            .then((autoJson) => {
                console.log("auto", autoJson);
                setAutoActual(autoJson);

                // Inicializa el estado con los valores actuales del auto
                setAutoData({
                    patente: autoJson.patente,
                    ubicacion: autoJson.fkUbicacion,
                    disponibilidad: autoJson.disponibilidad,
                    modelo: autoJson.modelo,
                    limpio: autoJson.limpio,
                });
            });
    }, [idAuto]);

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <label>Patente</label>
                    <p>{autoActual.patente}</p>

                    <label>Ubicacion</label>
                    <select name="ubicacion" onChange={handleChange} required value={autoData.ubicacion}>
                        <option value="">Selecciona una ubicacion</option>
                        <option value="1">Chalten</option>
                        <option value="2">Galpon</option>
                        <option value="3">Aeropuerto</option>
                    </select>

                    <label>Disponibilidad</label>
                    <select name="disponibilidad" onChange={handleChange} required value={autoData.disponibilidad}>
                        <option value="">Selecciona una disponibilidad</option>
                        <option value="Esta disponible">Esta disponible</option>
                        <option value="Esta alquilado">Esta alquilado</option>
                    </select>

                    <label>Modelo</label>
                    <p>{autoActual.modelo}</p>

                    <label>Limpio</label>
                    <select name="limpio" onChange={handleChange} required value={autoData.limpio}>
                        <option value="">Selecciona un estado</option>
                        <option value="1">Esta limpio</option>
                        <option value="0">No esta limpio</option>
                    </select>

                    <button type="submit">Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;
