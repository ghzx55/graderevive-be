import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { getGpa } from "../controllers/gpaController.js";

const router = express.Router();

router.get("/", verifyToken, getGpa);

export default router;
