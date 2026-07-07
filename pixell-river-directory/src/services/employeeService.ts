import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return await employeeRepo.getDepartments();
  },

  async createEmployee(
    departmentName: string,
    employee: Employee
  ): Promise<Department[]> {
    return await employeeRepo.createEmployee(departmentName, employee);
  },
};