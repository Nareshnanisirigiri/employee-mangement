import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";

export default function EmployeeTable({ employees, deleteEmployee }) {

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>

        {employees.map((emp) => (

          <TableRow key={emp._id}>

            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.email}</TableCell>
            <TableCell>{emp.position}</TableCell>
            <TableCell>{emp.salary}</TableCell>

            <TableCell>
              <Button
                color="error"
                onClick={() => deleteEmployee(emp._id)}
              >
                Delete
              </Button>
            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
  );
}