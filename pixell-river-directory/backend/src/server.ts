import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import roleRoutes from "./routes/roleRoutes";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/roles", roleRoutes);

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});