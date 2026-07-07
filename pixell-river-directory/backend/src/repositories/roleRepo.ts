import { prisma } from "../lib/prisma";
import type { Role } from "../types/Role";

export const roleRepo = {
  async getRoles(): Promise<Role[]> {
    const roles = await prisma.role.findMany({
      orderBy: {
        title: "asc",
      },
    });

    return roles.map((person) => ({
      firstName: person.firstName,
      lastName: person.lastName,
      role: person.title,
    }));
  },

  async createRole(newRole: Role): Promise<Role[]> {
    await prisma.role.create({
      data: {
        firstName: newRole.firstName,
        lastName: newRole.lastName,
        title: newRole.role,
      },
    });

    return this.getRoles();
  },
};