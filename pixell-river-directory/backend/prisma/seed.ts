import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const finance = await prisma.department.upsert({
    where: { name: "Finance" },
    update: {},
    create: { name: "Finance" },
  });

  const hr = await prisma.department.upsert({
    where: { name: "Human Resources" },
    update: {},
    create: { name: "Human Resources" },
  });
``
  const it = await prisma.department.upsert({
    where: { name: "Information Technology" },
    update: {},
    create: { name: "Information Technology" },
  });

  await prisma.employee.createMany({
    data: [
      { firstName: "John", lastName: "Smith", departmentId: finance.id },
      { firstName: "Sarah", lastName: "Johnson", departmentId: finance.id },
      { firstName: "Emily", lastName: "Brown", departmentId: hr.id },
      { firstName: "Michael", lastName: "Davis", departmentId: hr.id },
      { firstName: "David", lastName: "Wilson", departmentId: it.id },
      { firstName: "Jessica", lastName: "Taylor", departmentId: it.id },
    ],
  });

  await prisma.role.createMany({
    data: [
      { firstName: "John", lastName: "Smith", title: "Chief Executive Officer" },
      { firstName: "Sarah", lastName: "Johnson", title: "Chief Financial Officer" },
      { firstName: "Emily", lastName: "Brown", title: "Human Resources Manager" },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });