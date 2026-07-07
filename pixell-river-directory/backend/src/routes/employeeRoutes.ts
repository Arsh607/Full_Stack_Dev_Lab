import express from "express";
import { getDepartments, createEmployee } from "../controllers/employeeController";

const router = express.Router();

router.get("/", getDepartments);
router.post("/", createEmployee);

export default router;