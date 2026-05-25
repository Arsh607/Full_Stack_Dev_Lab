import { useState } from "react";
import type { Department, Employee } from "../types/Employee";

interface EmployeeFormProps {
  departments: Department[];
  onAddEmployee: (departmentName: string, employee: Employee) => void;
}

function EmployeeForm({ departments, onAddEmployee }: EmployeeFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentName, setDepartmentName] = useState(departments[0]?.name || "");
  const [validationMessage, setValidationMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidationMessage("");

    if (firstName.trim().length < 3) {
      setValidationMessage("First name must be at least 3 characters long.");
      return;
    }

    if (!departmentName) {
      setValidationMessage("Please select a department.");
      return;
    }

    const newEmployee: Employee = {
      firstName: firstName.trim(),
      lastName: lastName.trim() || undefined,
    };

    onAddEmployee(departmentName, newEmployee);

    setFirstName("");
    setLastName("");
    setDepartmentName(departments[0]?.name || "");
  };

  return (
    <section className="form-section">
      <h2>Add New Employee</h2>

      {validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>

        <label>
          Department
          <select
            value={departmentName}
            onChange={(event) => setDepartmentName(event.target.value)}
          >
            {departments.map((department) => (
              <option key={department.name} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}

export default EmployeeForm;