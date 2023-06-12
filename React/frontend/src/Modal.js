import './Modal.css';
import Formulario from './Form'
import { useState } from 'react';

function Modal({autos, setAutos}){
    function handleExit() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    
    return(
        <div id='modal' className='modal'>
            <div className='modal-content'>
                <div className="modal-header">
                    <button className='close' onClick={() => handleExit()}>&times;</button>
                    
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