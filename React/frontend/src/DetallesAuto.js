import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UploadWidget from "./components/UploadWidget";
import Modal from 'react-modal';
import FormEditAuto from "./FormEditAuto";
import './DetallesAuto.css';


const DetallesAuto = () => {
    const { idAuto } = useParams();
    const [auto, setAuto] = useState(null);
    const [images, setImages] = useState([]);
    const [imagenDanio, setImagenDanio] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const maxNumber = 1000;



    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        setImagenDanio(imageList["data_url"]);
        console.log("foto: ", imageList['data_url'])
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };


    useEffect(() => {
        // Realiza la solicitud HTTP o accede a tus datos para obtener los detalles del auto según el ID
        fetch(`http://localhost:5000/autos/${idAuto}`)
            .then((response) => response.json())
            .then((autoJson) => {
                console.log("auto", autoJson);
                setAuto(autoJson);
            });
    }, [idAuto]);

    useEffect(() => {
        fetch('https://api.cloudinary.com/v1_1/dewmttkfy/upload')
            .then((response) => response.json())
            .then((danioJson) => {
                setImagenDanio(danioJson);
                console.log("imagen:", imagenDanio)

            });
    }, [images]);

    if (!auto) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <div className="detalles-auto">
                <h1>Patente: {auto.patente}</h1>
                <p>Modelo: {auto.modelo}</p>
                <p>Disponibilidad: {auto.disponibilidad}</p>
                <UploadWidget />
                <button className="btn btn-primary" onClick={openAddModal}>
                    Cambiar Estado
                </button>

            </div>




            <Modal isOpen={isAddModalOpen} onRequestClose={closeAddModal} className="custom-modal">
                <h2>Cambiar Estado</h2>
                <FormEditAuto setAuto={setAuto} closeModal={closeAddModal} />
                <button onClick={closeAddModal}>Cancelar</button>
            </Modal>
        </>

    );
};

export default DetallesAuto;