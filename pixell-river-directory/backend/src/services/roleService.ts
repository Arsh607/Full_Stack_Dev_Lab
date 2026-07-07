import type { Role } from "../types/Role";
import { roleRepo } from "../repositories/roleRepo";

interface CreateRoleResult {
  success: boolean;
  roles?: Role[];
  errors?: {
    firstName?: string;
    lastName?: string;
    role?: string;
  };
}

export const roleService = {
  async getRoles(): Promise<Role[]> {
    return await roleRepo.getRoles();
  },

  async createRole(newRole: Role): Promise<CreateRoleResult> {
    const errors: CreateRoleResult["errors"] = {};

    if (!newRole.firstName || newRole.firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters long.";
    }

    if (!newRole.lastName || newRole.lastName.trim().length === 0) {
      errors.lastName = "Last name is required.";
    }

    if (!newRole.role || newRole.role.trim().length === 0) {
      errors.role = "Role is required.";
    }

    const roles = await roleRepo.getRoles();

    const roleAlreadyExists = roles.some(
      (person) =>
        person.role.toLowerCase() === newRole.role.trim().toLowerCase()
    );

    if (roleAlreadyExists) {
      errors.role = "This role is already occupied.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    const updatedRoles = await roleRepo.createRole({
      firstName: newRole.firstName.trim(),
      lastName: newRole.lastName.trim(),
      role: newRole.role.trim(),
    });

    return {
      success: true,
      roles: updatedRoles,
    };
  },
};