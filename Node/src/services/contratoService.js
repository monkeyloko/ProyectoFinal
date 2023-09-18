import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const contratoTabla = process.env.DB_TABLA_CONTRATO;


export class ContratoService {

    getContrato = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${contratoTabla}`);
        console.log(response)
        return response.recordset;
    }

    getContratoById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * from ${contratoTabla} where idContrato = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createContrato = async (contrato) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('precio', sql.Float, contrato?.precio ?? '')
            .input('fechaAlquilado', sql.Date, contrato?.fechaAlquilado ?? '')
            .input('fechaDevolucion', sql.Date, contrato?.fechaDevolucion ?? '')
            .input('fkCliente', sql.Int, contrato?.fkCliente ?? 0)
            .input('fkAuto', sql.Int, contrato?.fkAuto ?? 0)
            .input('id_dañoEntrega', sql.Int, contrato?.id_dañoEntrega ?? null)
            .input('id_dañoDevolucion', sql.Int, contrato?.id_dañoDevolucion ?? null)
            .input('ubicacionEntrega', sql.Int, contrato?.ubicacionEntrega ?? 0)
            .input('ubicacionDevolucion', sql.Int, contrato?.ubicacionDevolucion ?? 0)
            .query(`INSERT INTO ${contratoTabla}(precio, fechaAlquilado, fechaDevolucion, fkCliente, fkAuto, id_dañoEntrega, id_dañoDevolucion, ubicacionEntrega, ubicacionDevolucion) VALUES (@precio, @fechaAlquilado, @fechaDevolucion, @fkCliente, @fkAuto, @id_dañoEntrega, @id_dañoDevolucion, @ubicacionEntrega, @ubicacionDevolucion)`);
        console.log(response)
        return response.recordset;
    }

    updateContrato = async (id, contrato) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id', sql.Int, id)
            .input('precio', sql.Float, contrato?.precio ?? '')
            .input('fechaAlquilado', sql.Date, contrato?.fechaAlquilado ?? "")
            .input('fechaDevolucion', sql.Date, contrato?.fechaDevolucion ?? "")
            .input('fkCliente', sql.Int, contrato?.fkCliente ?? 0)
            .input('fkAuto', sql.Int, contrato?.fkAuto ?? 0)
            .input('id_dañoEntrega', sql.Int, contrato?.id_dañoEntrega ?? null)
            .input('id_dañoDevolucion', sql.Int, contrato?.id_dañoDevolucion ?? null)
            .input('ubicacionEntrega', sql.Int, contrato?.ubicacionEntrega ?? 0)
            .input('ubicacionDevolucion', sql.Int, contrato?.ubicacionDevolucion ?? 0)
            .query(`UPDATE ${contratoTabla} SET precio = @precio, fechaAlquilado = @fechaAlquilado, fechaDevolucion = @fechaDevolucion, fkCliente = @fkCliente, fkAuto = @fkAuto,id_dañoEntrega = @id_dañoEntrega,id_dañoDevolucion = @id_dañoDevolucion, ubicacionEntrega = @ubicacionEntrega, ubicacionDevolucion = @ubicacionDevolucion  WHERE Id = @Id`);
        console.log(response)
        return response.recordset;
    }

    deleteContrato = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${contratoTabla} WHERE idContrato = @id`);
        console.log(response)
        return response.recordset;
    }





}