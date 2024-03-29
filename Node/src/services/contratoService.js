import sql from 'mssql'
import 'dotenv/config'
import config from '../models/db.js'

const contratoTabla = process.env.DB_TABLA_CONTRATO;
const danosTabla = process.env.DB_TABLA_DANOS;


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

        // Obtener el último idDaños del auto relacionado al contrato
        const lastDanosQuery = await pool.request()
            .input('fkAuto', sql.Int, contrato.fkAuto)
            .query(`SELECT TOP 1 idDaños FROM ${danosTabla} WHERE fkAuto = @fkAuto ORDER BY fecha DESC`);



        const lastDanos = lastDanosQuery.recordset[0];
        const id_danoEntrega = lastDanos.idDaños;
        console.log("EL ID DAÑOS: ", id_danoEntrega)




        // Crear el registro de contrato
        const responseContrato = await pool.request()
            .input('precio', sql.Float, contrato?.precio ?? '')
            .input('fechaAlquilado', sql.Date, contrato?.fechaAlquilado ?? '')
            .input('fechaDevolucion', sql.Date, contrato?.fechaDevolucion ?? '')
            .input('fkCliente', sql.Int, contrato?.fkCliente ?? 0)
            .input('fkAuto', sql.Int, contrato?.fkAuto ?? 0)
            .input('id_danoEntrega', sql.Int, id_danoEntrega ?? '')
            .input('id_dañoDevolucion', sql.Int, contrato?.id_dañoDevolucion ?? null)
            .input('ubicacionEntrega', sql.Int, contrato?.ubicacionEntrega ?? 0)
            .input('ubicacionDevolucion', sql.Int, contrato?.ubicacionDevolucion ?? 0)
            .query(`INSERT INTO  ${contratoTabla}(precio, fechaAlquilado, fechaDevolucion, fkCliente, fkAuto, id_dañoEntrega, id_dañoDevolucion, ubicacionEntrega, ubicacionDevolucion) VALUES (@precio, @fechaAlquilado, @fechaDevolucion, @fkCliente, @fkAuto, @id_danoEntrega, @id_dañoDevolucion, @ubicacionEntrega, @ubicacionDevolucion)`);

        console.log(responseContrato);
        return responseContrato.recordset;
    }



    updateContrato = async (idContrato, contrato) => {
        try {
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('idContrato', sql.Int, idContrato)
                .input('precio', sql.Float, contrato?.precio ?? null)
                .input('fechaAlquilado', sql.Date, contrato?.fechaAlquilado ?? null)
                .input('fechaDevolucion', sql.Date, contrato?.fechaDevolucion ?? null)
                .input('fkCliente', sql.Int, contrato?.fkCliente ?? null)
                .input('fkAuto', sql.Int, contrato?.fkAuto ?? null)
                .input('id_danoEntrega', sql.Int, contrato?.id_dañoEntrega ?? null)
                .input('id_dañoDevolucion', sql.Int, contrato?.id_dañoDevolucion ?? null)
                .input('ubicacionEntrega', sql.Int, contrato?.ubicacionEntrega ?? null)
                .input('ubicacionDevolucion', sql.Int, contrato?.ubicacionDevolucion ?? null)
                .query(`
                    UPDATE ${contratoTabla}
                    SET
                        precio = @precio,
                        fechaAlquilado = @fechaAlquilado,
                        fechaDevolucion = @fechaDevolucion,
                        fkCliente = @fkCliente,
                        fkAuto = @fkAuto,
                        id_dañoEntrega = @id_danoEntrega,
                        id_dañoDevolucion = @id_dañoDevolucion,
                        ubicacionEntrega = @ubicacionEntrega,
                        ubicacionDevolucion = @ubicacionDevolucion
                    WHERE idContrato = @idContrato
                `);

            console.log(response);
            return response.recordset;
        } catch (error) {
            console.error('Error al actualizar el contrato:', error);
            throw error;
        } finally {
            await sql.close();
        }
    };

    deleteContrato = async (id) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${contratoTabla} WHERE idContrato = @id`);
        console.log(response)
        return response.recordset;
    }

}