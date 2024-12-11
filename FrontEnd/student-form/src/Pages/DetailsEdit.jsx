import { useState } from "react";
import { Button, Paper, Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DetailsEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
  });
////////////////////////////////////////////////////////////////////////
  const rows = [
    { id: 1, name: "John Doe", studentId: "S001" },
    { id: 2, name: "Jane Smith", studentId: "S002" },
    { id: 3, name: "Alice Johnson", studentId: "S003" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "studentId", headerName: "Student ID", width: 200 },

///////////////////////////////////////////////////////////////////////////////////////////////
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <>
          {/* Edit Button */}
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            size="small"
            onClick={() => handleEdit(params.row)}
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Edit
          </Button>

          {/* Delete Button */}
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={() => handleDelete(params.row)}
            sx={{
              backgroundColor: "#d32f2f",
              color: "white",
              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
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
    <Box
      display="flex"
      flexDirection="column" 
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#E4EDEC",
        
      }}
    >

      <Paper
        elevation={3} 
        sx={{
          height: 450,
          width: "80%",
          marginTop: "20px",
          borderRadius: "10px",
          padding: "70px",
          textAlign: "justify",
         
        }}
        
      >
      <Typography
        variant="h4"
        align="center"
        gutterBottom 
        sx={{ fontWeight: "bold", color: "#333" }} 
      >
        Edit Student Details
      </Typography>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10]}
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaders": { 
              backgroundColor: "#1976d2",
              color: "black",
              fontSize: "16px",
             
            },
            "& .MuiDataGrid-cell": {
              padding: "10px",
              fontSize: "14px",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default DetailsEdit;
