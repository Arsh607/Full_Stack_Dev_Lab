import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../repositories/employeeRepo";

interface CreateEmployeeResult {
  success: boolean;
  departments?: Department[];
  errors?: {
    firstName?: string;
    department?: string;
  };
}

export const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return await employeeRepo.getDepartments();
  },

  async createEmployee(
    departmentName: string,
    employee: Employee
  ): Promise<CreateEmployeeResult> {
    const errors: CreateEmployeeResult["errors"] = {};

    const departments = await employeeRepo.getDepartments();

    const departmentExists = departments.some(
      (department) => department.name === departmentName
    );

    if (!departmentExists) {
      errors.department = "Department does not exist.";
    }

    if (!employee.firstName || employee.firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    const updatedDepartments = await employeeRepo.createEmployee(
      departmentName,
      {
        firstName: employee.firstName.trim(),
        lastName: employee.lastName?.trim() || undefined,
      }
    );

    return {
      success: true,
      departments: updatedDepartments,
    };
  },
};