import pool from "./db.js";

export async function createUser(email, passwordHash) {
  const [rows] = await pool.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, passwordHash]
  );
  return rows;
}

export async function findUserByEmail(email) {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
}
