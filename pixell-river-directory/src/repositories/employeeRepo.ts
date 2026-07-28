import type { Department, Employee } from "../types/Employee";

const API_URL = `${import.meta.env.VITE_API_URL}/api/employees`;

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to retrieve departments.");
    }

    return response.json();
  },

  async createEmployee(
    departmentName: string,
    employee: Employee,
    token: string
  ): Promise<Department[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        departmentName,
        employee,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result.departments;
  },
};