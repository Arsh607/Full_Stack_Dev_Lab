import type { Department } from "../types/Employee";
import DepartmentSection from "./DepartmentSection";

interface MainContentProps {
  departments: Department[];
}

function MainContent({ departments }: MainContentProps) {
  return (
    <main>
      {departments.map((department) => (
        <DepartmentSection key={department.name} department={department} />
      ))}
    </main>
  );
}

export default MainContent;