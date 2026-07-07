import { useState } from "react";
import { roleService } from "../services/roleService";
import type { Role } from "../types/Role";

function useRoleForm(onRoleCreated: () => Promise<void>) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [roleError, setRoleError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFirstNameError("");
    setRoleError("");

    const newRole: Role = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: role.trim(),
    };

    try {
      await roleService.createRole(newRole);

      setFirstName("");
      setLastName("");
      setRole("");

      await onRoleCreated();
    } catch (error: unknown) {
      const apiError = error as {
        errors?: {
          firstName?: string;
          role?: string;
        };
      };

      setFirstNameError(apiError.errors?.firstName || "");
      setRoleError(apiError.errors?.role || "");
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    role,
    setRole,
    firstNameError,
    roleError,
    handleSubmit,
  };
}

export default useRoleForm;