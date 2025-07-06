import { getGpaByUserId } from "../models/gpaModel.js";

export async function getGpa(req, res) {
  const userId = req.user.id;  // JWT 에서 id
  try {
    const data = await getGpaByUserId(userId);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
