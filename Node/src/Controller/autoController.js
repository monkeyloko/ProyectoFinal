import { Router } from 'express';
import express from 'express';
import { AutoService } from '../services/autoService.js';
import { Auto } from '../models/auto.js';
const router = Router();
const autoService = new AutoService();
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
    const auto = await autoService.getAuto();
    return res.status(200).json(auto);
});

router.get('/:id', async (req, res) => {
    const auto = await autoService.getAutoById(req.params.id);
    return res.status(200).json(auto);
});

router.post('', async (req, res) => {
    const auto = await autoService.createAuto(req.body);
    console.log(auto)
    return res.status(201).json(auto);
});

router.put('/:id', async (req, res) => {
    const auto = await autoService.updateAuto(req.params.id, req.body);
    return res.status(200).json(auto);
});

router.delete('/:id', async (req, res) => {
    const auto = await autoService.deleteAuto(req.params.id);
    return res.status(200).json(auto);
});




export default router;