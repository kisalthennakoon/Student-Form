import { useState } from "react";
import {  Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DetailsEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
  });

  const rows = [
    { id: 1, name: "John Doe", studentId: "S001" },
    { id: 2, name: "Jane Smith", studentId: "S002" },
    { id: 3, name: "Alice Johnson", studentId: "S003" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "studentId", headerName: "Student ID", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row)}
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];


  const handleEdit = (row) => {
    setFormData({ name: row.name, studentId: row.studentId });
    alert(`Editing entry for: ${row.name}`);
    console.log("Edit Data:", row);
  };

  const handleDelete = (row) => {
    alert(`Deleted entry for: ${row.name}`);
    console.log("Deleted Data:", row);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Student Details</h2>
      <Paper sx={{ height: 400, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default DetailsEdit;
