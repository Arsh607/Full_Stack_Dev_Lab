import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../repositories/employeeRepo";

export interface CreateEmployeeResult {
  success: boolean;
  departments?: Department[];
  errors?: {
    firstName?: string;
    department?: string;
  };
}

export const employeeService = {
  getDepartments(): Department[] {
    return employeeRepo.getDepartments();
  },

  createEmployee(departmentName: string, employee: Employee): CreateEmployeeResult {
    const errors: CreateEmployeeResult["errors"] = {};

    const departmentExists = employeeRepo
      .getDepartments()
      .some((department) => department.name === departmentName);

    if (!departmentExists) {
      errors.department = "Please select an existing department.";
    }

    if (employee.firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    const updatedDepartments = employeeRepo.createEmployee(departmentName, employee);

    return {
      success: true,
      departments: updatedDepartments,
    };
  },
};