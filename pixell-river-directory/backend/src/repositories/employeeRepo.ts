import type { Department, Employee } from "../types/Employee.ts";

let departments: Department[] = [
  {
    name: "Finance",
    employees: [
      { firstName: "John", lastName: "Smith" },
      { firstName: "Sarah", lastName: "Johnson" },
    ],
  },
  {
    name: "Human Resources",
    employees: [
      { firstName: "Emily", lastName: "Brown" },
      { firstName: "Michael", lastName: "Davis" },
    ],
  },
  {
    name: "Information Technology",
    employees: [
      { firstName: "David", lastName: "Wilson" },
      { firstName: "Jessica", lastName: "Taylor" },
    ],
  },
];

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