import express from "express";
import {
  getRoles,
  createRole,
} from "../controllers/roleController";
import { requireUser } from "../../middleware/requireUser";

const router = express.Router();

router.get("/", getRoles);
router.post("/", requireUser, createRole);

export default router;