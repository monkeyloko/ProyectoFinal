import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const autoTabla = process.env.DB_TABLA_AUTO;


export class AutoService {

    getAuto = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${autoTabla}`);
        console.log(response)
        return response.recordset;
    }

    getAutoById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * from ${autoTabla} where idAuto = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createAuto = async (auto) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('patente', sql.NChar, auto?.patente ?? '')
            .input('fkUbicacion', sql.Int, auto?.fkUbicacion ?? 0)
            .input('disponibilidad', sql.NChar, auto?.disponibilidad ?? '')
            .input('modelo', sql.NChar, auto?.modelo ?? '')
            .input('limpio', sql.Bit, auto?.limpio ?? null)
            .query(`INSERT INTO ${autoTabla}(patente, fkUbicacion, disponibilidad, modelo, limpio) VALUES (@patente, @fkUbicacion, @disponibilidad, @modelo, @limpio)`);
        console.log(response)
        return response.recordset;
    }

    updateAuto = async (id, auto) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idAuto', sql.Int, id)
            .input('patente', sql.NChar, auto?.patente ?? '')
            .input('fkUbicacion', sql.Int, auto?.fkUbicacion ?? 0)
            .input('disponibilidad', sql.NChar, auto?.disponibilidad ?? '')
            .input('modelo', sql.NChar, auto?.modelo ?? '')
            .input('limpio', sql.Bit, auto?.limpio ?? 0)
            .query(`UPDATE ${autoTabla} SET patente = @patente, fkUbicacion = @fkUbicacion, disponibilidad = @disponibilidad, modelo = @modelo, limpio = @limpio WHERE idAuto = @idAuto`);
        console.log(response)
        return response.recordset;
    }

    deleteAuto = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${autoTabla} WHERE idAuto = @id`);
        console.log(response)
        return response.recordset;
    }





}