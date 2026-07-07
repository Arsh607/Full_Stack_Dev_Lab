import type { Role } from "../types/Role";
import { roleRepo } from "../repositories/roleRepo";

export const roleService = {
  async getRoles(): Promise<Role[]> {
    return await roleRepo.getRoles();
  },

  async createRole(newRole: Role): Promise<Role[]> {
    return await roleRepo.createRole(newRole);
  },
};