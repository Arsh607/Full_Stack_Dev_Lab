import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export function getDepartments(_request: Request, response: Response) {
  const departments = employeeService.getDepartments();
  response.json(departments);
}

export function createEmployee(request: Request, response: Response) {
  const { departmentName, employee } = request.body;

  const result = employeeService.createEmployee(departmentName, employee);

  if (!result.success) {
    return response.status(400).json(result);
  }

  return response.status(201).json(result);
}