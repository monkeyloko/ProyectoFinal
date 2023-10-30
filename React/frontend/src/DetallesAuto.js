import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UploadWidget from "./components/UploadWidget";


const DetallesAuto = () => {
    const { idAuto } = useParams();
    const [auto, setAuto] = useState(null);
    const [images, setImages] = useState([]);
    const [imagenDanio, setImagenDanio] = useState(null);
    const maxNumber=1000;
    

    
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        setImagenDanio(imageList["data_url"]);
        console.log("foto: ", imageList['data_url'])
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
    </div>

        <UploadWidget/>
        </>
       
    );
};

export default DetallesAuto;