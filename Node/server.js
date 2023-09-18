import express from "express";
import cors from "cors";
import AutoRouter from "./src/Controller/autoController.js";
import UbicacionRouter from "./src/Controller/ubicacionController.js";
import ClienteRouter from "./src/Controller/clienteController.js";
import DañosRouter from "./src/Controller/dañosController.js";
import ContratoRouter from "./src/Controller/contratoController.js";
import ReparacionRouter from "./src/Controller/reparacionController.js"

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/autos", AutoRouter);
app.use("/ubicacion", UbicacionRouter);
app.use("/cliente", ClienteRouter);
app.use("/danos", DañosRouter);
app.use("/reparacion",ReparacionRouter);
app.use("/contrato", ContratoRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});