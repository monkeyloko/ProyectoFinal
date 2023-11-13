import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const autoTabla = process.env.DB_TABLA_AUTO;
const dañosTabla = process.env.DB_TABLA_DANOS;


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

           const ultimoAuto = await pool.request().query(`SELECT TOP 1 idAuto from ${autoTabla} ORDER BY idAuto desc`);

            //const getLastCommandQueueIdResponse = await pool.query('SELECT LAST_INSERT_ID() AS LAST_INSERT_ID');
            console.log("response;  ", ultimoAuto.recordset[0].idAuto)
            
          

            const response2 = await pool.request()
            .input('fotoActual', sql.NChar, 'foto')
            .input('fecha', sql.Date, '2005-09-10')
            .input('fkAuto', sql.Int, ultimoAuto.recordset[0].idAuto ?? '')
            .input('descripcion', sql.NChar, 'auto recien creado')
            .query(`INSERT INTO ${dañosTabla}(fotoActual, fecha, fkAuto, descripcion) VALUES (@fotoActual, @fecha, @fkAuto, @descripcion)`);
    
        
            
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