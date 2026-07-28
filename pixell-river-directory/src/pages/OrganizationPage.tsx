import { useEffect, useState } from "react";
import { Show } from "@clerk/react";
import MainContent from "../components/MainContent";
import EmployeeForm from "../components/EmployeeForm";
import LoginRequired from "../components/LoginRequired";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/Employee";

function EmployeesPage() {
  const [departments, setDepartments] = useState<Department[]>([]);

  const refreshDepartments = async () => {
    const data = await employeeService.getDepartments();
    setDepartments(data);
  };

  useEffect(() => {
    void refreshDepartments();
  }, []);

  return (
    <>
      <MainContent departments={departments} />

      <Show when="signed-in">
        <EmployeeForm
          departments={departments}
          onEmployeeCreated={refreshDepartments}
        />
      </Show>

      <Show when="signed-out">
        <LoginRequired />
      </Show>
    </>
  );
}

export default EmployeesPage;