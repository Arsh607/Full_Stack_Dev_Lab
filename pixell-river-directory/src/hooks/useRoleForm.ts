import { useState } from "react";
import { useAuth } from "@clerk/react";
import { roleService } from "../services/roleService";
import type { Role } from "../types/Role";

function useRoleForm(
  onRoleCreated: () => Promise<void>
) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const [firstNameError, setFirstNameError] =
    useState("");
  const [lastNameError, setLastNameError] =
    useState("");
  const [roleError, setRoleError] = useState("");

  const { getToken } = useAuth();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setRoleError("");

    const newRole: Role = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: role.trim(),
    };

    try {
      const token = await getToken();

      if (!token) {
        setRoleError(
          "You must be logged in to add a role."
        );
        return;
      }

      await roleService.createRole(newRole, token);

      setFirstName("");
      setLastName("");
      setRole("");

      await onRoleCreated();
    } catch (error: unknown) {
      const apiError = error as {
        errors?: {
          firstName?: string;
          lastName?: string;
          role?: string;
        };
        message?: string;
      };

      setFirstNameError(
        apiError.errors?.firstName || ""
      );

      setLastNameError(
        apiError.errors?.lastName || ""
      );

      setRoleError(
        apiError.errors?.role ||
          apiError.message ||
          "Unable to add role."
      );
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
    lastNameError,
    roleError,
    handleSubmit,
  };
}

export default useRoleForm;