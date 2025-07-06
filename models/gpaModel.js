import pool from "./db.js";

export async function getGpaByUserId(userId) {
  const [rows] = await pool.query(
    "SELECT * FROM gpa WHERE user_id = ?",
    [userId]
  );
  return rows;
}
