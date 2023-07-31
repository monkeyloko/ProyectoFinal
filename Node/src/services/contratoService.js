import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const contratoTabla = process.env.DB_TABLA_CONTRATO;


export class contratoService {

    getContrato = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${autoTabla}`);
        console.log(response)
        return response.recordset;
    }

    getContratoById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${contratoTabla} where idContrato = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createContrato = async (contrato) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('precio',sql.NChar, contrato?.precio ?? '')
            .input('fechaAlquilado',sql.Int, contrato?.fechaAlquilado ?? 0)
            .input('fechaDevolucion',sql.NChar, contrato?.fechaDevolucion ?? '')
            .input('fkCliente',sql.NChar, contrato?.fkCliente ?? '')
            .input('fkAuto',sql.Bit, contrato?.fkAuto ?? null)
            .input('id_dañoEntrega',sql.Bit, contrato?.id_dañoEntrega ?? null)
            .input('id_dañoDevolucion',sql.Bit, contrato?.id_dañoDevolucion ?? null)
            .input('ubicacionEntrega',sql.Bit, contrato?.ubicacionEntrega ?? null)
            .input('ubicacionDevolucion',sql.Bit, contrato?.ubicacionDevolucion ?? null)
            .query(`INSERT INTO ${contratoTabla}(precio, fechaAlquilado, fechaDevolucion, fkCliente, fkAuto, id_dañoEntrega, id_dañoDevolucion, ubicacionEntrega, ubicacionDevolucion) VALUES (@precio, @fechaAlquilado, @fechaDevolucion, @fkCliente, @fkAuto, @id_dañoEntrega, @id_dañoDevolucion, @ubicacionEntrega, @ubicacionDevolucion)`);
        console.log(response)
        return response.recordset;
    }

    updateContrato = async (id, contrato) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('precio',sql.NChar, contrato?.precio ?? '')
        .input('fechaAlquilado',sql.Int, contrato?.fechaAlquilado ?? 0)
        .input('fechaDevolucion',sql.NChar, contrato?.fechaDevolucion ?? '')
        .input('fkCliente',sql.NChar, contrato?.fkCliente ?? '')
        .input('fkAuto',sql.Bit, contrato?.fkAuto ?? null)
        .input('id_dañoEntrega',sql.Bit, contrato?.id_dañoEntrega ?? null)
        .input('id_dañoDevolucion',sql.Bit, contrato?.id_dañoDevolucion ?? null)
        .input('ubicacionEntrega',sql.Bit, contrato?.ubicacionEntrega ?? null)
        .input('ubicacionDevolucion',sql.Bit, contrato?.ubicacionDevolucion ?? null)
            .query(`UPDATE ${autoTabla} SET patente = @patente, fkUbicacion = @fkUbicacion, disponibilidad = @disponibilidad, modelo = @modelo, limpio = @limpio WHERE Id = @Id`);
        console.log(response)
        return response.recordset;
    }

    deleteContrato = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${autoTabla} WHERE idAuto = @id`);
        console.log(response)
        return response.recordset;
    }
    
    

    
    
}