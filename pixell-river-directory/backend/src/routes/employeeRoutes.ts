import express from "express";
import {
  getDepartments,
  createEmployee,
} from "../controllers/employeeController";
import { requireUser } from "../../middleware/requireUser";

const router = express.Router();

router.get("/", getDepartments);
router.post("/", requireUser, createEmployee);

export default router;