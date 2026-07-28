import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import employeeRoutes from "./routes/employeeRoutes";
import roleRoutes from "./routes/roleRoutes";

const app = express();
const PORT = 5001;

app.use(
  clerkMiddleware({
    authorizedParties: [
      "http://localhost:5173",
      process.env.FRONTEND_URL ?? "",
    ].filter(Boolean),
  })
);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL ?? "",
    ].filter(Boolean),
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/roles", roleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});