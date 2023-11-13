import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from 'react-modal';
import FormEditAuto from "./FormEditAuto";
import FormEditContrato from "./FormEditContrato";
import './DetallesAuto.css';

const DetallesContrato = () => {
    const { idContrato } = useParams();
    const [contrato, setContrato] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/contrato/${idContrato}`)
            .then((response) => response.json())
            .then((contratoData) => {
                console.log("Contrato obtenido del servidor:", contratoData);
                setContrato(contratoData);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles del contrato:", error);
            });
    }, [idContrato]);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleContrato = () => {
        console.log("se toca el boton")
    }

    return (
        <div className="detalles-auto">
            <h2>Detalles del Contrato</h2>
            {contrato ? (
                <div>
                    <p>ID del Contrato: {contrato.idContrato}</p>
                    <p>Precio: ${contrato.precio}</p>
                    <p>Fecha de Entrega: {contrato.fechaAlquilado}</p>
                    <p>Fecha de Devolución: {contrato.fechaDevolucion}</p>

<Link to={`/contratos/ver/${contrato.idContrato}`} className="btn btn-primary" onClick={()=>{handleContrato()}}>Ver contrato</Link>

                </div>
            ) : (
                <p>Cargando detalles del contrato...</p>
            )}

            {/*<Modal isOpen={isEditModalOpen} onRequestClose={closeEditModal} className="custom-modal">
                <h2>Editar Contrato</h2>

                <FormEditContrato setContrato={setContrato} closeModal={closeEditModal} />
                <button onClick={closeEditModal}>Cancelar</button>
            </Modal>{*/}
        </div>
    );
};

export default DetallesContrato;
