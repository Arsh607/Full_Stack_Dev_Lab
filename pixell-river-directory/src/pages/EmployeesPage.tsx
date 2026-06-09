import { useState } from "react";
import MainContent from "../components/MainContent";
import EmployeeForm from "../components/EmployeeForm";
import departmentData from "../data/departments.json";
import type { Department, Employee } from "../types/Employee";

function EmployeesPage() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  const addEmployee = (departmentName: string, employee: Employee) => {
    const updatedDepartments = departments.map((department) => {
      if (department.name === departmentName) {
        return {
          ...department,
          employees: [...department.employees, employee],
        };
      }

      return department;
    });

    setDepartments(updatedDepartments);
  };

  return (
    <>
      <MainContent departments={departments} />
      <EmployeeForm departments={departments} onAddEmployee={addEmployee} />
    </>
  );
}

export default EmployeesPage;