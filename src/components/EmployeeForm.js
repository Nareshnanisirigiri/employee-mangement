import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function EmployeeForm({ addEmployee }) {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({
      name: "",
      email: "",
      position: "",
      salary: ""
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 4 }}
    >

      <TextField
        label="Name"
        name="name"
        value={employee.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Position"
        name="position"
        value={employee.position}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Salary"
        name="salary"
        value={employee.salary}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        type="submit"
      >
        Add Employee
      </Button>

    </Box>
  );
}