import useRoleForm from "../hooks/useRoleForm";

interface RoleFormProps {
  onRoleCreated: () => Promise<void>;
}

function RoleForm({ onRoleCreated }: RoleFormProps) {
  const roleForm = useRoleForm(onRoleCreated);

  return (
    <section className="form-section">
      <h2>Add Organization Role</h2>

      <form onSubmit={roleForm.handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={roleForm.firstName}
            onChange={(event) => roleForm.setFirstName(event.target.value)}
          />
          {roleForm.firstNameError && (
            <p className="error-message">{roleForm.firstNameError}</p>
          )}
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={roleForm.lastName}
            onChange={(event) => roleForm.setLastName(event.target.value)}
          />
        </label>

        <label>
          Role
          <input
            type="text"
            value={roleForm.role}
            onChange={(event) => roleForm.setRole(event.target.value)}
          />
          {roleForm.roleError && (
            <p className="error-message">{roleForm.roleError}</p>
          )}
        </label>

        <button type="submit">Add Role</button>
      </form>
    </section>
  );
}

export default RoleForm;