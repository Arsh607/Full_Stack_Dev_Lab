import { useState } from "react";
import RoleForm from "../components/RoleForm";
import { roleService } from "../services/roleService";
import type { Role } from "../types/Role";

function OrganizationPage() {
  const [roles, setRoles] = useState<Role[]>(roleService.getRoles());

  const refreshRoles = () => {
    setRoles([...roleService.getRoles()]);
  };

  return (
    <main>
      <section className="organization-section">
        <h2>Leadership and Management</h2>

        <div className="role-list">
          {roles.map((person) => (
            <div
              className="role-card"
              key={`${person.firstName}-${person.lastName}-${person.role}`}
            >
              <span>
                {person.firstName} {person.lastName}
              </span>
              <strong>{person.role}</strong>
            </div>
          ))}
        </div>
      </section>

      <RoleForm onRoleCreated={refreshRoles} />
    </main>
  );
}

export default OrganizationPage;