import type { Role } from "../types/Role";
import { roleRepo } from "../repositories/roleRepo";

export interface CreateRoleResult {
  success: boolean;
  roles?: Role[];
  errors?: {
    firstName?: string;
    role?: string;
  };
}

export const roleService = {
  getRoles(): Role[] {
    return roleRepo.getRoles();
  },

  createRole(newRole: Role): CreateRoleResult {
    const errors: CreateRoleResult["errors"] = {};

    if (newRole.firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters long.";
    }

    const roleAlreadyExists = roleRepo
      .getRoles()
      .some(
        (person) =>
          person.role.toLowerCase() === newRole.role.trim().toLowerCase()
      );

    if (roleAlreadyExists) {
      errors.role = "This role is already occupied.";
    }

    if (!newRole.role.trim()) {
      errors.role = "Role is required.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    const updatedRoles = roleRepo.createRole(newRole);

    return {
      success: true,
      roles: updatedRoles,
    };
  },
};