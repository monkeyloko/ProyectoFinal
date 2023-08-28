import { Router } from 'express';
import express from 'express';
import { Reparacion, ReparacionService } from '../services/reparacionService.js';
import { Reparacion } from '../models/reparacion.js';
const router = Router();
const reparacionService = new ReparacionService();
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
    const reparacion = await reparacionService.getReparacion();
    return res.status(200).json(reparacion);
});

router.get('/:id', async (req, res) => {
    const reparacion = await reparacionService.getReparacionById(req.params.id);
    return res.status(200).json(reparacion);
});

router.post('', async (req, res) => {
    const reparacion = await reparacionService.reparacionContrato(req.body);
    return res.status(201).json(reparacion);
});

router.put('', async (req, res) => {
    const reparacion = await reparacionService.updateReparacion(req.params.id, req.body);
    return res.status(201).json(reparacion);
});

router.delete('/:id', async (req, res) => {
    const reparacion = await reparacionService.deleteReparacion(req.params.id);
    return res.status(200).json(reparacion);
});




export default router;