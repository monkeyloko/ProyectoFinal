import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const clienteTabla = process.env.DB_TABLA_CLIENTE;


export class ClienteService {

    getCliente = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${clienteTabla}`);
        console.log(response)
        return response.recordset;
    }

    getClienteById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * from ${clienteTabla} where idCliente = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createCliente = async (cliente) => {
        const pool = await sql.connect(config);
        console.log(cliente)
        const response = await pool.request()
            .input('nombreCompleto', sql.NChar, cliente?.nombreCompleto ?? '')
            .input('dni', sql.Int, cliente?.dni ?? 0)
            .input('telefono', sql.NChar, cliente?.telefono ?? '')
            .query(`INSERT INTO ${clienteTabla} (nombreCompleto, dni, telefono) VALUES (@nombreCompleto, @dni, @telefono)`);
            
        console.log(response)
        return response.recordset;
    }

    updateCliente = async (id, cliente) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idCliente', sql.Int, id)
            .input('nombreCompleto', sql.NChar, cliente?.nombreCompleto ?? '')
            .input('dni', sql.Int, cliente?.dni ?? 0)
            .input('telefono', sql.NChar, cliente?.telefono ?? '')
            .input('email', sql.NChar, cliente?.email ?? '')
            .query(`UPDATE ${clienteTabla} SET nombreCompleto = @nombreCompleto, dni = @dni, telefono = @telefono, email = @email WHERE idCliente = @Id`);
        console.log(response)
        return response.recordset;
    }

    deleteCliente = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${clienteTabla} WHERE idCliente = @id`);
        console.log(response)
        return response.recordset;
    }





}