import express from "express";
import {
  insertBalon,
  getBalones,
  getBalonById,
  deleteBalon,
  getBalonesPorPrecio,
  getPromedioPrecio
} from "../models/balonModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await insertBalon(req.body);
  res.send({ message: "Balón agregado correctamente" });
});

router.get("/", async (req, res) => {
  res.send(await getBalones());
});

router.get("/:id", async (req, res) => {
  const balon = await getBalonById(req.params.id);
  balon ? res.send(balon) : res.status(404).send({ message: "No encontrado" });
});

router.delete("/:id", async (req, res) => {
  await deleteBalon(req.params.id);
  res.send({ message: "Balón eliminado" });
});

router.get("/precio/:min", async (req, res) => {
  res.send(await getBalonesPorPrecio(req.params.min));
});

router.get("/promedio/precio", async (req, res) => {
  res.send(await getPromedioPrecio());
});

export default router;