import departmentData from "../data/departments.json";
import type { Department, Employee } from "../types/Employee";

let departments: Department[] = departmentData;

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },

  createEmployee(departmentName: string, employee: Employee): Department[] {
    departments = departments.map((department) =>
      department.name === departmentName
        ? {
            ...department,
            employees: [...department.employees, employee],
          }
        : department
    );

    return departments;
  },
};