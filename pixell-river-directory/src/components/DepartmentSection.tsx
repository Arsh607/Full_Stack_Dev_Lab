import type { Department } from "../types/Employee";

interface DepartmentSectionProps {
  department: Department;
}

function DepartmentSection({ department }: DepartmentSectionProps) {
  return (
    <section className="department-card">
      <h2>{department.name}</h2>

      <ul>
        {department.employees.map((employee, index) => (
          <li key={index}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DepartmentSection;