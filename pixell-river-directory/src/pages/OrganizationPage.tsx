import roles from "../data/roles.json";
import type { Role } from "../types/Role";

function OrganizationPage() {
  const roleData: Role[] = roles;

  return (
    <main>
      <section className="organization-section">
        <h2>Leadership and Management</h2>

        <div className="role-list">
          {roleData.map((person) => (
            <div className="role-card" key={`${person.firstName}-${person.lastName}`}>
              <span>
                {person.firstName} {person.lastName}
              </span>
              <strong>{person.role}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OrganizationPage;