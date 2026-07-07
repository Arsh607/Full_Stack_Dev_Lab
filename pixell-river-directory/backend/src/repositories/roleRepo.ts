import type { Role } from "../types/Role.ts";

let roles: Role[] = [
  {
    firstName: "John",
    lastName: "Smith",
    role: "Chief Executive Officer",
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    role: "Chief Financial Officer",
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    role: "Human Resources Manager",
  },
];

export const roleRepo = {
  getRoles(): Role[] {
    return roles;
  },

  createRole(newRole: Role): Role[] {
    roles = [...roles, newRole];
    return roles;
  },
};