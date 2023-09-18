import { Router } from 'express';
import express from 'express';
import { DañosService } from '../services/dañosService.js';
import { Daños } from '../models/daños.js';
const router = Router();
const dañosService = new DañosService();
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
    const daños = await dañosService.getDaños();
    return res.status(200).json(daños);
});

router.get('/:id', async (req, res) => {
    const daños = await dañosService.getDañosById(req.params.id);
    return res.status(200).json(daños);
});


router.get('/danoEntrega/:id', async (req, res) => {
    const daños = await dañosService.getLastDañoByCar(req.params.id);
    return res.status(200).json(daños);
});

router.post('', async (req, res) => {
    const daños = await dañosService.dañosContrato(req.body);
    return res.status(201).json(daños);
});

router.put('', async (req, res) => {
    const daños = await dañosService.updateDaños(req.params.id, req.body);
    return res.status(201).json(daños);
});

router.delete('/:id', async (req, res) => {
    const daños = await dañosService.deleteDaños(req.params.id);
    return res.status(200).json(daños);
});




export default router;