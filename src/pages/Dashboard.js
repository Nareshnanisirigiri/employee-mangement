import React, { useEffect, useState } from "react";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

import {
  getEmployees,
  addEmployee,
  deleteEmployee
} from "../services/api";

import { Container, Typography } from "@mui/material";

export default function Dashboard() {

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAdd = async (data) => {
    await addEmployee(data);
    loadEmployees();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <Container>

      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Employee Management
      </Typography>

      <EmployeeForm addEmployee={handleAdd} />

      <EmployeeTable
        employees={employees}
        deleteEmployee={handleDelete}
      />

    </Container>
  );
}