import { useAuth } from "@clerk/react";
import useFormInput from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/Employee";

interface EmployeeFormProps {
  departments: Department[];
  onEmployeeCreated: () => Promise<void>;
}

function EmployeeForm({
  departments,
  onEmployeeCreated,
}: EmployeeFormProps) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const departmentName = useFormInput("");

  const { getToken } = useAuth();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    firstName.setMessage("");
    lastName.setMessage("");
    departmentName.setMessage("");

    try {
      const token = await getToken();

      if (!token) {
        departmentName.setMessage(
          "You must be logged in to add an employee."
        );
        return;
      }

      await employeeService.createEmployee(
        departmentName.value,
        {
          firstName: firstName.value.trim(),
          lastName: lastName.value.trim() || undefined,
        },
        token
      );

      firstName.reset();
      lastName.reset();
      departmentName.reset();

      await onEmployeeCreated();
    } catch (error: unknown) {
      const apiError = error as {
        errors?: {
          firstName?: string;
          department?: string;
        };
        message?: string;
      };

      firstName.setMessage(
        apiError.errors?.firstName || ""
      );

      departmentName.setMessage(
        apiError.errors?.department ||
          apiError.message ||
          "Unable to add employee."
      );
    }
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
            onChange={(event) =>
              firstName.setValue(event.target.value)
            }
          />

          {firstName.message && (
            <p className="error-message">
              {firstName.message}
            </p>
          )}
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName.value}
            onChange={(event) =>
              lastName.setValue(event.target.value)
            }
          />
        </label>

        <label>
          Department
          <select
            value={departmentName.value}
            onChange={(event) =>
              departmentName.setValue(event.target.value)
            }
          >
            <option value="">Select a department</option>

            {departments.map((department) => (
              <option
                key={department.name}
                value={department.name}
              >
                {department.name}
              </option>
            ))}
          </select>

          {departmentName.message && (
            <p className="error-message">
              {departmentName.message}
            </p>
          )}
        </label>

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}

export default EmployeeForm;