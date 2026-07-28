import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return employeeRepo.getDepartments();
  },

  async createEmployee(
    departmentName: string,
    employee: Employee,
    token: string
  ): Promise<Department[]> {
    return employeeRepo.createEmployee(departmentName, employee, token);
  },
};