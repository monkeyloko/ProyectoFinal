import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tabla.css';
import './Form.css';

const TablaContratos = () => {
	const [contratos, setContratos] = useState([]);
	const [clientes, setClientes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	const fetchClientes = () => {
		fetch('http://localhost:5000/cliente/')
			.then((response) => response.json())
			.then((clientesJson) => {
				console.log('Clientes obtenidos del servidor:', clientesJson);
				setClientes(clientesJson);
			})
			.catch((error) => {
				console.error('Error al obtener los clientes:', error);
			});
	};

	useEffect(() => {
		fetchContratos();
		fetchClientes();
	}, []);

	const contratosVigentes = contratos.filter((contrato) => {
		const fechaDevolucion = new Date(contrato.fechaDevolucion);
		const fechaHoy = new Date();
		return fechaDevolucion >= fechaHoy;
	});

	return (
		<div className="Tabla">
			<table>
				<thead>
					<tr>
						<th>Precio</th>
						<th>Fecha de Entrega</th>
						<th>Fecha de Devolucion</th>
						<th>Cliente</th>
						<th>Detalle</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading &&
						contratosVigentes.map((contrato) => {
							const cliente = clientes.find((c) => c.idCliente === contrato.fkCliente);
							return (
								<tr key={contrato.idContrato}>
									<td>${contrato.precio}</td>
									<td>{contrato.fechaAlquilado}</td>
									<td>{contrato.fechaDevolucion}</td>
									<td>{cliente ? cliente.nombreCompleto : ''}</td>
									<td>
										<Link to={`/contratos/${contrato.idContrato}`} className="btn btn-primary">
											Ver Detalle
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default TablaContratos;