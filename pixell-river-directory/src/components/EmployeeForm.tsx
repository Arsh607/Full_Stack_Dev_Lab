import useFormInput from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

interface EmployeeFormProps {
  onEmployeeCreated: () => void;
}

function EmployeeForm({ onEmployeeCreated }: EmployeeFormProps) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const departmentName = useFormInput("");

  const departments = employeeService.getDepartments();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    firstName.setMessage("");
    lastName.setMessage("");
    departmentName.setMessage("");

    const result = employeeService.createEmployee(departmentName.value, {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim() || undefined,
    });

    if (!result.success) {
      firstName.setMessage(result.errors?.firstName || "");
      departmentName.setMessage(result.errors?.department || "");
      return;
    }

    firstName.reset();
    lastName.reset();
    departmentName.reset();

    onEmployeeCreated();
  };

  return (
    <section className="form-section">
      <h2>Add New Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName.value}
            onChange={(event) => firstName.setValue(event.target.value)}
          />
          {firstName.message && <p className="error-message">{firstName.message}</p>}
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName.value}
            onChange={(event) => lastName.setValue(event.target.value)}
          />
        </label>

        <label>
          Department
          <select
            value={departmentName.value}
            onChange={(event) => departmentName.setValue(event.target.value)}
          >
            <option value="">Select a department</option>
            {departments.map((department) => (
              <option key={department.name} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
          {departmentName.message && (
            <p className="error-message">{departmentName.message}</p>
          )}
        </label>

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}

export default EmployeeForm;