import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import UploadWidget from "./components/UploadWidget";
import FormEditAuto from "./FormEditAuto";
import "./Clientes.css"; // Importa tu archivo de estilos CSS

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/cliente/')
            .then((response) => response.json())
            .then((clientesJson) => {
                console.log('clientes', clientesJson);
                setClientes(clientesJson);
                setIsLoading(false);
            });

    }, []);

    return (
        <div className="clientes-container">
            {isLoading ? (
                <p>Cargando clientes...</p>
            ) : (
                <ul className="clientes-list">
                    {clientes.map((cliente) => (
                        <li key={cliente.idCliente} className="cliente-item">

                            <div className="cliente-card">
                                <h3>{cliente.nombreCompleto}</h3>
                                <p>DNI: {cliente.dni}</p>
                                <p>Teléfono: {cliente.telefono}</p>

                            </div>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Clientes;
