// Employee objects
const departments = [
    {
        name: "Finance",
        employees: [
            { firstName: "John", lastName: "Smith" },
            { firstName: "Sarah", lastName: "Johnson" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Emily", lastName: "Brown" },
            { firstName: "Michael", lastName: "Davis" }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            { firstName: "David", lastName: "Wilson" },
            { firstName: "Jessica", lastName: "Taylor" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const main = document.getElementById("employee-directory");

    // Create department sections dynamically
    departments.forEach((department) => {

        const section = document.createElement("section");
        section.classList.add("department");

        const heading = document.createElement("h2");
        heading.textContent = department.name;

        const employeeList = document.createElement("ul");

        department.employees.forEach((employee) => {

            const listItem = document.createElement("li");

            listItem.textContent =
                `${employee.firstName} ${employee.lastName ?? ""}`;

            employeeList.appendChild(listItem);
        });

        section.appendChild(heading);
        section.appendChild(employeeList);

        main.appendChild(section);
    });

    // Insert current year into footer
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
});