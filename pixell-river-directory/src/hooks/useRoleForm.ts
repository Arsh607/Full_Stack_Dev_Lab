import { useState } from "react";
import { roleService } from "../services/roleService";
import type { Role } from "../types/Role";

function useRoleForm(onRoleCreated: () => void) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [roleError, setRoleError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFirstNameError("");
    setRoleError("");

    const newRole: Role = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: role.trim(),
    };

    const result = roleService.createRole(newRole);

    if (!result.success) {
      setFirstNameError(result.errors?.firstName || "");
      setRoleError(result.errors?.role || "");
      return;
    }

    setFirstName("");
    setLastName("");
    setRole("");

    onRoleCreated();
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