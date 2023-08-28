import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const reparacionTabla = process.env.DB_TABLA_REPARACION;


export class ReparacionTabla {

    getReparacion = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${reparacionTabla}`);
        console.log(response)
        return response.recordset;
    }

    getReparacionById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idReparacion', sql.Int, id)
            .query(`SELECT * from ${reparacionTabla} where idReparacion = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createReparacion = async (reparacion) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('fkEstadoReparacionAntes', sql.Int, reparacion?.fkEstadoReparacionAntes ?? '')
            .input('fkEstadoReparacionDespues', sql.Int, reparacion?.fkEstadoReparacionDespues ?? '')
            .input('fecha', sql.Date, reparacion?.fecha ?? '')
            .input('descripcion', sql.NChar, reparacion?.descripcion ?? 0)
            .query(`INSERT INTO ${reparacionTabla}(fkEstadoReparacionAntes, fkEstadoReparacionDespues, fecha, descripcion) VALUES (@fkEstadoReparacionAntes, @fkEstadoReparacionDespues, @fecha, @descripcion)`);
        console.log(response)
        return response.recordset;
    }

    updateReparacion = async (id, reparacion) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idReparacion', sql.Int, idReparacion)
            .input('fkEstadoReparacionAntes', sql.Int, reparacion?.fkEstadoReparacionAntes ?? '')
            .input('fkEstadoReparacionDespues', sql.Int, reparacion?.fkEstadoReparacionDespues ?? '')
            .input('fecha', sql.Date, reparacion?.fecha ?? '')
            .input('descripcion', sql.NChar, reparacion?.descripcion ?? 0)
            .query(`UPDATE ${reparacionTabla} SET fkEstadoReparacionAntes = @fkEstadoReparacionAntes, fkEstadoReparacionDespues = @fkEstadoReparacionDespues, fecha = @fecha, descripcion = @descripcion WHERE idReparacion = @idReparacion`);
        console.log(response)
        return response.recordset;
    }

    deleteReparacion = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${reparacionTabla} WHERE idReparacion = @idReparacion`);
        console.log(response)
        return response.recordset;
    }





}