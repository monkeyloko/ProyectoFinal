import { Router } from 'express';
import express from 'express';
import { ClienteService } from '../services/clienteService.js';
import { Cliente } from '../models/cliente.js';
const router = Router();
const clienteService = new ClienteService();
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
    const cliente = await clienteService.getCliente();
    return res.status(200).json(cliente);
});

router.get('/:id', async (req, res) => {
    const cliente = await clienteService.getClienteById(req.params.id);
    return res.status(200).json(cliente);
});

router.post('', async(req, res) => {
    try {
        let r = await clienteService.createCliente(req.body);
        console.log(r)
        res.status(200).json({message: 'character inserted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'insert failed'});
    }
});

router.put('', async (req, res) => {
    const cliente = await clienteService.updateCliente(req.body);
    return res.status(200).json(cliente);
});

router.delete('/:id', async (req, res) => {
    const cliente = await clienteService.deleteCliente(req.params.id);
    return res.status(200).json(cliente);
});




export default router;