import { Router } from 'express';
import express from 'express';
import { UbicacionService } from '../services/ubicacionService.js';
import { Ubicacion } from '../models/ubicacion.js';
const router = Router();
const ubicacionService = new UbicacionService();
const app = express();
app.use(express.json());
/*
    Hacer validaciones de status

        Hacer validaciones de status

            Hacer validaciones de status

                Hacer validaciones de status

                    Hacer validaciones de status
            
                Hacer validaciones de status

            Hacer validaciones de status

        Hacer validaciones de status

    Hacer validaciones de status
    
*/
router.get('', async (req, res) => {
    const ubicacion = await ubicacionService.getUbicacion();
    return res.status(200).json(ubicacion);
});

router.get('/:id',  async (req, res) => {
    const ubicacion = await ubicacionService.getUbicacion(req.params.id);
    return res.status(200).json(ubicacion);
});

router.post('',  async (req, res) => {
    const ubicacion = await ubicacionService.createUbicacion(req.body);
    return res.status(201).json(ubicacion);
});

router.delete('/:id',  async (req, res) => {
    const ubicacion = await ubicacionService.deleteUbicacion(req.params.id);
    return res.status(200).json(ubicacion);
});




export default router;