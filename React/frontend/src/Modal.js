import './Modal.css';
import Formulario from './Form'
import { useState } from 'react';

function Modal({autos, setAutos}){
    let modal = document.getElementById('modal');
    function handleExit() {
        modal.style.display = 'none';
    }

    
    return(
        <div id='modal' className='modal'>
            <div className='modal-content'>
                <div className="modal-header">
                    <button className='close' onClick={() => handleExit()}>&times;</button>
                    <h4>Agregar auto</h4>
                </div>
                <div className="modal-body">
                    <Formulario setAutos={setAutos} autos={autos}/>
                </div>
                <div className="modal-footer">
                    <button onClick={() => handleExit()}>Atrás</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;