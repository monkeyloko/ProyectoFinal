import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallesAuto = () => {
    const { idAuto } = useParams();
    const [auto, setAuto] = useState(null);

    useEffect(() => {
        // Realiza la solicitud HTTP o accede a tus datos para obtener los detalles del auto según el ID
        fetch(`http://localhost:5000/autos/${idAuto}`)
            .then((response) => response.json())
            .then((autoJson) => {
                console.log("auto", autoJson);
                setAuto(autoJson);
            });
    }, [idAuto]);

    if (!auto) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="detalles-auto">
            <h1>Patente: {auto.patente}</h1>
            <p>Modelo: {auto.modelo}</p>
            <p>Disponibilidad: {auto.disponibilidad}</p>
        </div>
    );
};

export default DetallesAuto;