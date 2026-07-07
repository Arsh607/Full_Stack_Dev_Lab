import type { Department, Employee } from "../types/Employee";

const API_URL = "http://localhost:5001/api/employees";

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(API_URL);
    return response.json();
  },

  async createEmployee(
    departmentName: string,
    employee: Employee
  ): Promise<Department[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ departmentName, employee }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result.departments;
  },
};