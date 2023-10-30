import React from "react";
import { useEffect, useRef } from "react";
import axios from 'axios';

const UploadWidget=()=>{
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName:'dewmttkfy',
            uploadPreset:'eifczbm1',
        }, function(error, result) {
            console.log(result)
        })
        console.log(cloudinaryRef.current)
    }, [])

    return(
        <button onClick={()=> widgetRef.current.open()}> 
            Subir Foto
         </button>
    )

}

export default UploadWidget;