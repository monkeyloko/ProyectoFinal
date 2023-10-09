import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './Tabla.css';
import FormContrato from './FormContrato';

const TablaContratos = () => {
	const [contratos, setContratos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedContrato, setSelectedContrato] = useState(null);
	const [editedContrato, setEditedContrato] = useState(null);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const fetchContratos = () => {
		fetch('http://localhost:5000/contrato/')
			.then((response) => response.json())
			.then((contratosJson) => {
				console.log('Contratos obtenidos del servidor:', contratosJson);
				setContratos(contratosJson);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error al obtener los contratos:', error);
			});
	};


	useEffect(() => {
		fetchContratos();
	}, []);

	const openEditModal = (contrato) => {
		setSelectedContrato(contrato);
		setEditedContrato({ ...contrato }); // Clonar el contrato seleccionado para editar
		setIsEditModalOpen(true);
	};

	const closeEditModal = () => {
		setSelectedContrato(null);
		setEditedContrato(null);
		setIsEditModalOpen(false);
	};

	const handleInputChange = (e) => {
		// Manejar cambios en el formulario y actualizar editedContrato
		const { name, value } = e.target;
		setEditedContrato({
			...editedContrato,
			[name]: value,
		});
	};

	const updateContrato = async () => {
		try {
			// Convierte las fechas en objetos Date
			const fechaAlquilado = new Date(editedContrato.fechaAlquilado);
			const fechaDevolucion = new Date(editedContrato.fechaDevolucion);

			// Formatea las fechas en formato ISO
			const formattedContrato = {
				...editedContrato,
				fechaAlquilado: fechaAlquilado.toISOString().split('T')[0],
				fechaDevolucion: fechaDevolucion.toISOString().split('T')[0],
			};

			const response = await fetch(`http://localhost:5000/contrato/${selectedContrato.idContrato}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formattedContrato),
			});

			if (response.ok) {
				// Si la actualización fue exitosa, recargamos la lista de contratos.
				fetchContratos();
				closeEditModal();
			} else {
				console.error('Error al actualizar el contrato');
			}
		} catch (error) {
			console.error('Error al actualizar el contrato', error);
		}
	};


	return (
		<div className="Tabla">
			<table>
				<thead>
					<tr>
						<th>Precio</th>
						<th>Fecha de Entrega</th>
						<th>Fecha de Devolucion</th>
						<th>Cliente</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading &&
						contratos.map((contrato) => (
							<tr
								key={contrato.idContrato}
								onClick={() => openEditModal(contrato)}
								style={{ cursor: 'pointer' }}
							>
								<td>{contrato.precio}</td>
								<td>{contrato.fechaAlquilado}</td>
								<td>{contrato.fechaDevolucion}</td>
								<td>{contrato.fkCliente}</td>
							</tr>
						))}
				</tbody>
			</table>

			<Modal isOpen={isEditModalOpen} onRequestClose={closeEditModal} className="custom-modal">
				<h2>Editar Contrato</h2>
				<form>
					<div className="form-group">
						<label>Precio</label>
						<input
							type="number"
							name="precio"
							value={editedContrato?.precio || ''}
							onChange={handleInputChange}
						/>
						<div className="form-group">
							<label>Fecha de Entrega</label>
							<input
								type="date"
								name="fechaAlquilado"
								value={editedContrato?.fechaAlquilado || ''}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label>Fecha de Devolucion</label>
							<input
								type="date"
								name="fechaDevolucion"
								value={editedContrato?.fechaDevolucion || ''}
								onChange={handleInputChange}
							/>
						</div>

					</div>
					{/* Agregar otros campos del contrato aquí */}
					<button type="button" onClick={updateContrato}>
						Guardar Cambios
					</button>
					<button type="button" onClick={closeEditModal}>
						Cancelar
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default TablaContratos;