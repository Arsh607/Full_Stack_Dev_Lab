import { prisma } from "../lib/prisma";
import type { Department, Employee } from "../types/Employee";

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const departments = await prisma.department.findMany({
      include: {
        employees: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return departments.map((department) => ({
      name: department.name,
      employees: department.employees.map((employee) => ({
        firstName: employee.firstName,
        lastName: employee.lastName || undefined,
      })),
    }));
  },

  async createEmployee(
    departmentName: string,
    employee: Employee
  ): Promise<Department[]> {
    const department = await prisma.department.findUnique({
      where: {
        name: departmentName,
      },
    });

    if (!department) {
      throw new Error("Department does not exist.");
    }

    await prisma.employee.create({
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName || null,
        departmentId: department.id,
      },
    });

    return this.getDepartments();
  },
};