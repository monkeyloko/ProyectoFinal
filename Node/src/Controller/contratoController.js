import { Router } from 'express';
import express from 'express';
import { ContratoService } from '../services/contratoService.js';
import { Contrato } from '../models/contrato.js';
const router = Router();
const contratoService = new ContratoService();
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
    const contrato = await contratoService.getContrato();
    return res.status(200).json(contrato);
});

router.get('/:id', async (req, res) => {
    const contrato = await contratoService.getContratoById(req.params.id);
    return res.status(200).json(contrato);
});

router.post('', async (req, res) => {
    const contrato = await contratoService.createContrato(req.body);
    return res.status(201).json(contrato);
});

router.put('/:id', async (req, res) => {
    const contrato = await contratoService.updateContrato(req.params.id, req.body);
    return res.status(201).json(contrato);
});

router.delete('/:id', async (req, res) => {
    const contrato = await contratoService.deleteContrato(req.params.id);
    return res.status(200).json(contrato);
});




export default router;