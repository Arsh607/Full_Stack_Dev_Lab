import type { Role } from "../types/Role";
import { roleRepo } from "../repositories/roleRepo";

export const roleService = {
  async getRoles(): Promise<Role[]> {
    return roleRepo.getRoles();
  },

  async createRole(newRole: Role, token: string): Promise<Role[]> {
    return roleRepo.createRole(newRole, token);
  },
};