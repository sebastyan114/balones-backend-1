import express from "express";
import balonesRoutes from "./routes/balonesRoutes.js";
import { createTable } from "./models/balonModel.js";

const app = express();
app.use(express.json());
app.use("/balones", balonesRoutes);

app.listen(3000, async () => {
  await createTable();
  console.log("Servidor corriendo en http://localhost:3000");
});