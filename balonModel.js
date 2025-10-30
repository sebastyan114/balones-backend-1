import { openDb } from "../db.js";

export async function createTable() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS balones (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      marca TEXT,
      tipo TEXT,
      precio REAL,
      cantidad INTEGER
    )
  `);
}

export async function insertBalon(balon) {
  const db = await openDb();
  await db.run(
    "INSERT INTO balones (marca, tipo, precio, cantidad) VALUES (?, ?, ?, ?)",
    [balon.marca, balon.tipo, balon.precio, balon.cantidad]
  );
}

export async function getBalones() {
  const db = await openDb();
  return db.all("SELECT * FROM balones");
}

export async function getBalonById(id) {
  const db = await openDb();
  return db.get("SELECT * FROM balones WHERE id = ?", [id]);
}

export async function deleteBalon(id) {
  const db = await openDb();
  return db.run("DELETE FROM balones WHERE id = ?", [id]);
}

export async function getBalonesPorPrecio(minPrecio) {
  const db = await openDb();
  return db.all("SELECT * FROM balones WHERE precio >= ?", [minPrecio]);
}

export async function getPromedioPrecio() {
  const db = await openDb();
  return db.get("SELECT AVG(precio) as promedio FROM balones");
}