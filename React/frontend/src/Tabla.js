import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Tabla.css';
import Formulario from './Form';
import FormContrato from './FormContrato';

const Tabla = () => {
  const [autos, setAutos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddModalOpen2, setIsAddModalOpen2] = useState(false);
  const [auto, setAuto] = useState(null);
  const [contrato, setContrato] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/autos/')
      .then((response) => response.json())
      .then((autosJson) => {
        console.log('autos', autosJson);
        setAutos(autosJson);
        setIsLoading(false);
      });
  }, []);

  const handleClick = (auto) => {
    setSelectedAuto(auto);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const openAddModal2 = () => {
    setIsAddModalOpen2(true);
  };

  const closeAddModal2 = () => {
    setIsAddModalOpen2(false);
  };

  return (
    <div className="Tabla">
      <table>
        <thead>
          <tr>
            <th>Patente</th>
            <th>Modelo</th>
            <th>Ubicacion</th>
            <th>Alquilado</th>
            <th>Estado</th>
            <th>Disponible</th>
            <th>Daños</th>
            <th>En arreglo</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            autos.map((auto) => (
              <tr key={auto.idAuto} onClick={() => handleClick(auto)}>
                <td>
                  <Link to={`/autos/${auto.idAuto}`}>{auto.patente}</Link>
                </td>
                <td>{auto.modelo}</td>
                <td>{auto.fkUbicacion}</td>
                <td>{auto.disponibilidad}</td>
                <td>{auto.limpio ? 'Esta limpio' : 'No esta limpio'}</td>
                <td>- -</td>
                <td>- -</td>
                <td>- -</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={openAddModal}>
        Agregar Auto
      </button>

      <button className="btn btn-primary" onClick={openAddModal2}>
        Crear Contrato
      </button>

      <Modal isOpen={isAddModalOpen} onRequestClose={closeAddModal}>
        <h2>Agregar Auto</h2>
        <Formulario setAuto={setAuto} closeModal={closeAddModal} />
        <button onClick={closeAddModal}>Cancelar</button>
      </Modal>

      <Modal isOpen={isAddModalOpen2} onRequestClose={closeAddModal2}>
        <h2>Crear Contrato</h2>
        <FormContrato setContrato={setContrato} closeModal={closeAddModal2} />
        <button onClick={closeAddModal2}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default Tabla;