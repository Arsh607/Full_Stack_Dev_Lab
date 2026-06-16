import roleData from "../data/roles.json";
import type { Role } from "../types/Role";

let roles: Role[] = roleData;

export const roleRepo = {
  getRoles(): Role[] {
    return roles;
  },

  createRole(newRole: Role): Role[] {
    roles = [...roles, newRole];
    return roles;
  },
};