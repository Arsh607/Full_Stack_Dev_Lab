import departments from "../data/departments.json";
import type { Department } from "../types/Employee";
import DepartmentSection from "./DepartmentSection";

function MainContent() {
  const departmentData: Department[] = departments;

  return (
    <main>
      {departmentData.map((department) => (
        <DepartmentSection key={department.name} department={department} />
      ))}
    </main>
  );
}

export default MainContent;