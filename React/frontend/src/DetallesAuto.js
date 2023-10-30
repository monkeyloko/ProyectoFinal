import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageUploading from 'react-images-uploading';


const DetallesAuto = () => {
    const { idAuto } = useParams();
    const [auto, setAuto] = useState(null);
    const [images, setImages] = useState([]);
    const [dano, setDano] = useState(null);
    const maxNumber=1000;
    

    
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
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
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={[]}
      >
            
        

        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Subir una foto
            </button>
            
            {imageList.map((image, index) => (
                
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Cambiar foto</button>
                  <button onClick={() => onImageRemove(index)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}
        </ImageUploading>
        </>
       
    );
};

export default DetallesAuto;