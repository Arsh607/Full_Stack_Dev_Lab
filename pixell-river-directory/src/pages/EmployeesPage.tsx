import { useEffect, useState } from "react";
import MainContent from "../components/MainContent";
import EmployeeForm from "../components/EmployeeForm";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/Employee";

function EmployeesPage() {
  const [departments, setDepartments] = useState<Department[]>([]);

  const refreshDepartments = async () => {
    const data = await employeeService.getDepartments();
    setDepartments(data);
  };

  useEffect(() => {
    refreshDepartments();
  }, []);

  return (
    <>
      <MainContent departments={departments} />
      <EmployeeForm onEmployeeCreated={refreshDepartments} />
    </>
  );
}

export default EmployeesPage;