import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Tabla.css';
import Formulario from './Form';
import FormContrato from './FormContrato';
import FormCliente from './FormCliente';

const Tabla = () => {
  const [autos, setAutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddModalOpen2, setIsAddModalOpen2] = useState(false);
  const [isAddModalOpen3, setIsAddModalOpen3] = useState(false);
  const [auto, setAuto] = useState(null);
  const [contrato, setContrato] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [editableRow, setEditableRow] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/autos/')
      .then((response) => response.json())
      .then((autosJson) => {
        setAutos(autosJson);
        setIsLoading(false);
      });
  }, []);

  const handleEditClick = (auto) => {
    setEditableRow(auto.idAuto);
  };

  const handleSaveClick = (auto) => {
    // Aquí puedes realizar la lógica para guardar los cambios en el auto
    setEditableRow(null);
  };

  const handleCancelClick = () => {
    setEditableRow(null);
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
            <th>Alquilado</th>
            <th>Estado</th>
            <th>Disponible</th>
            <th>Daños</th>
            <th>En arreglo</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            autos.map((auto) => (
              <tr key={auto.idAuto}>
                <td>
                  <Link to={`/autos/${auto.idAuto}`}>{auto.patente}</Link>
                </td>
                <td>
                  {editableRow === auto.idAuto ? (
                    <input
                      type="text"
                      value={auto.modelo}
                      // Aquí deberías tener un controlador de cambios para el modelo
                    />
                  ) : (
                    auto.modelo
                  )}
                </td>
                <td>{auto.fkUbicacion}</td>
                <td>{editableRow === auto.idAuto ? (
                    <input
                      type="text"
                      value={auto.disponibilidad}
                      // Aquí deberías tener un controlador de cambios para el modelo
                    />
                  ) : (
                    auto.disponibilidad
                  )}</td>
                <td>{editableRow === auto.idAuto ? (
                    <input
                      type="bool"
                      value={auto.limpio}
                      // Aquí deberías tener un controlador de cambios para el modelo
                    />
                  ) : (
                    auto.limpio ? 'Está limpio' : 'No está limpio'
                  )}</td>
                <td>- -</td>
                <td>- -</td>
                <td>- -</td>
                <td>
                  {editableRow === auto.idAuto ? (
                    <button onClick={() => handleSaveClick(auto)}>Guardar</button>
                  ) : (
                    <button onClick={() => handleEditClick(auto)}>Editar</button>
                  )}
                </td>
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
