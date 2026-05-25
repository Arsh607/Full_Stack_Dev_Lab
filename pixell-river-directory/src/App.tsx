import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import EmployeeForm from "./components/EmployeeForm";
import departmentData from "./data/departments.json";
import type { Department, Employee } from "./types/Employee";

function App() {
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
      <Header />
      <MainContent departments={departments} />
      <EmployeeForm departments={departments} onAddEmployee={addEmployee} />
      <Footer />
    </>
  );
}

export default App;