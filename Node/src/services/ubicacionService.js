import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const ubicacionTabla = process.env.DB_TABLA_UBICACION;


export class UbicacionService {

    getUbicacion = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${ubicacionTabla}`);
        console.log(response)
        return response.recordset;
    }

    getUbicacionById = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${ubicacionTabla} where idUbicacion = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createUbicacion = async (ubicacion 
        ) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('nombre',sql.NChar, ubicacion?.nombre ?? '')
            .input('direccion',sql.NChar, ubicacion?.direccion ?? '')
            .query(`INSERT INTO ${ubicacionTabla}(nombre, direccion) VALUES (@nombre, @direccion)`);
        console.log(response)
        return response.recordset;
    }

    /*updateAuto = async (id, auto) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, id)
            .input('Imagen',sql.NChar, auto?.Imagen ?? '')
            .input('Titulo',sql.NChar, auto?.Titulo ?? '')
            .input('FechaCreacion',sql.Int, auto?.FechaCreacion ?? null)
            .input('Calificacion',sql.Float, auto?.Calificacion ?? 0)
            .query(`UPDATE ${autoTabla} SET Imagen = @Imagen, Titulo = @Titulo, FechaCreacion = @FechaCreacion, Calificacion = @Calificacion WHERE Id = @Id`);
        console.log(response)
        return response.recordset;
    }*/

    deleteUbicacion = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${ubicacionTabla} WHERE idUbicacion = @id`);
        console.log(response)
        return response.recordset;
    }
    
    

    
    
}