import express from "express";
import cors from "cors";
import AutoRouter from "./src/Controller/autoController.js";
import UbicacionRouter from "./src/Controller/ubicacionController.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/autos", AutoRouter);
app.use("/ubicacion", UbicacionRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});