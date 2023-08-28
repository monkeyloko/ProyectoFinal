import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const dañosTabla = process.env.DB_TABLA_DAÑOS;


export class DañosService {

    getDaños = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${dañosTabla}`);
        console.log(response)
        return response.recordset;
    }

    getDañosById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * from ${dañosTabla} where idDaños = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createDaños = async (daños) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('fotoActual', sql.NChar, daños?.fotoActual ?? '')
            .input('fecha', sql.Date, daños?.fecha ?? '')
            .input('fkAuto', sql.Int, daños?.fkAuto ?? '')
            .input('descripcion', sql.NChar, daños?.descripcion ?? 0)
            .query(`INSERT INTO ${dañosTabla}(fotoActual, fecha, fkAuto, descripcion) VALUES (@fotoActual, @fecha, @fkAuto, @descripcion)`);
        console.log(response)
        return response.recordset;
    }

    updateDaños = async (id, daños) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idDaños', sql.Int, id)
            .input('fotoActual', sql.NChar, daños?.fotoActual ?? '')
            .input('fecha', sql.Date, daños?.fecha ?? '')
            .input('fkAuto', sql.Int, daños?.fkAuto ?? '')
            .input('descripcion', sql.NChar, daños?.descripcion ?? 0)
            .query(`UPDATE ${dañosTabla} SET fotoActual = @fotoActual, fecha = @fecha, fkAuto = @fkAuto, descripcion = @descripcion WHERE Id = @Id`);
        console.log(response)
        return response.recordset;
    }

    deleteDaños = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${dañosTabla} WHERE idDaños = @id`);
        console.log(response)
        return response.recordset;
    }





}