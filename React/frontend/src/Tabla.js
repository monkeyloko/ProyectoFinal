import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Tabla.css';
import Formulario from './Form';
import FormContrato from './FormContrato';
import FormCliente from './FormCliente';

class Auto {
  idAuto;
  patente;
  fkUbicacion;
  disponibilidad;
  modelo;
  limpio;
}

const Tabla = () => {
  const [autos, setAutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddModalOpen2, setIsAddModalOpen2] = useState(false);
  const [isAddModalOpen3, setIsAddModalOpen3] = useState(false);
  const [ubicaciones, setUbicaciones] = useState([])
  const [auto, setAuto] = useState(new Auto());
  const [cliente, setCliente] = useState(null);
  const [contrato, setContrato] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/autos/')
      .then((response) => response.json())
      .then((autosJson) => {
        setAutos(autosJson);
        setIsLoading(false);
      });
    fetch('http://localhost:5000/ubicacion/')
      .then((response) => response.json())
      .then((ubicacionesJson) => {
        setUbicaciones(ubicacionesJson);
      });
  }, []);

  const getUbicacionName = (ubicacionId) => {
    const ubicacion = ubicaciones.find((u) => u.idUbicacion === ubicacionId);
    return ubicacion ? ubicacion.nombre : 'Ubicación no encontrada';
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

  const openAddModal3 = () => {
    setIsAddModalOpen3(true);
  };

  const closeAddModal3 = () => {
    setIsAddModalOpen3(false);
  };

  return (
    <div className="Tabla">
      <table>
        <thead>
          <tr>
            <th>Patente</th>
            <th>Modelo</th>
            <th>Ubicacion</th>
            <th>Disponibilidad</th>
            <th>Limpio</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            autos.map((auto) => (
              <tr key={auto.idAuto}>
                <td><Link to={`/autos/${auto.idAuto}`}>{auto.patente}</Link></td>
                <td>{auto.modelo}</td>
                <td>{getUbicacionName(auto.fkUbicacion)}</td>
                <td>{auto.disponibilidad}</td>
                <td>{auto.limpio ? 'Sí' : 'No'}</td>
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

      <button className="btn btn-primary" onClick={openAddModal3}>
        Crear Cliente
      </button>

      <Modal isOpen={isAddModalOpen} onRequestClose={closeAddModal} className="custom-modal">
        <h2>Agregar Auto</h2>
        <Formulario setAuto={setAuto} closeModal={closeAddModal} />
        <button onClick={closeAddModal}>Cancelar</button>
      </Modal>

      <Modal isOpen={isAddModalOpen2} onRequestClose={closeAddModal2} className="custom-modal">
        <h2>Crear Contrato</h2>
        <FormContrato setContrato={setContrato} closeModal={closeAddModal2} />
        <button onClick={closeAddModal2}>Cancelar</button>
      </Modal>

      <Modal isOpen={isAddModalOpen3} onRequestClose={closeAddModal3} className="custom-modal">
        <h2>Agregar Cliente</h2>
        <FormCliente setCliente={setCliente} closeModal={closeAddModal3} />
        <button onClick={closeAddModal3}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default Tabla;