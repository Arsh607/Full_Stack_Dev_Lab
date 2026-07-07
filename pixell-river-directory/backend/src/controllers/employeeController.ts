import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export async function getDepartments(
  _request: Request,
  response: Response
) {
  try {
    const departments = await employeeService.getDepartments();
    return response.json(departments);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      message: "Failed to retrieve departments.",
    });
  }
}

export async function createEmployee(
  request: Request,
  response: Response
) {
  try {
    const { departmentName, employee } = request.body;

    const result = await employeeService.createEmployee(
      departmentName,
      employee
    );

    if (!result.success) {
      return response.status(400).json(result);
    }

    return response.status(201).json(result);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      message: "Failed to create employee.",
    });
  }
}