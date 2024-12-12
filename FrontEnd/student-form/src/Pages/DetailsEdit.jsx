import { useState, useEffect } from "react";
import { Button, Paper, Typography, Box, Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deepOrange } from "@mui/material/colors";
import axios from "axios";

const DetailsEdit = () => {
  const [students, setStudents] = useState([]);
  const userId = localStorage.getItem("userId");

  const form_url = `http://localhost:8080/api/v1/acc/${userId}/form`;
  const delete_url = `http://localhost:8080/api/v1/acc/${userId}/deleteForm`;
  const edit_url = `http://localhost:8080/api/v1/acc/${userId}/editForm`;

  const getStudents = async () => {
    const response = await axios.get(form_url);
    return response.data;
  };

  const updateStudent = async (id, studentData) => {
    const url = `${edit_url}/${id}`;
    const response = await axios.put(url, studentData);
    return response.data;
  };

  const deleteStudent = async (id) => {
    const url = `${delete_url}/${id}`;
    await axios.delete(url);
  };

  useEffect(() => {
    if (userId) {
      loadStudents();
    } else {
      console.error("No userId found in localStorage.");
    }
  }, []);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      const formattedData = data.map((student, index) => ({
        ...student,
        id: student.id || index,
      }));
      setStudents(formattedData);
    } catch (error) {
      alert("Failed to load student data.");
      console.error("Error fetching students:", error);
    }
  };

  const handleEdit = async (row) => {
    const updatedName = prompt("Edit Name:", row.name);
    const updatedStudentId = prompt("Edit Student ID:", row.studentId);

    if (updatedName && updatedStudentId) {
      try {
        const updatedData = { name: updatedName, studentId: updatedStudentId };
        await updateStudent(row.id, updatedData);
        alert(`Updated entry for: ${updatedName}`);
        loadStudents();
      } catch (error) {
        alert("Failed to update student.");
        console.error("Error updating student:", error);
      }
    }
  };

  const handleDelete = async (row) => {
    if (window.confirm(`Are you sure you want to delete ${row.name}?`)) {
      try {
        await deleteStudent(row.id);
        alert(`Deleted entry for: ${row.name}`);
        loadStudents();
      } catch (error) {
        alert("Failed to delete student.");
        console.error("Error deleting student:", error);
      }
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "image",
      headerName: "Profile Photo",
      width: 150,
      renderCell: (params) => (
        <Avatar
          sx={{ bgcolor: params.row.image ? undefined : deepOrange[500] }}
          alt={params.row.name}
          src={params.row.image || "/broken-image.jpg"}
        >
          {!params.row.image && params.row.name.charAt(0)}
        </Avatar>
      ),
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "studentId", headerName: "Student ID", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            size="small"
            onClick={() => handleEdit(params.row)}
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              marginRight: "10px",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={() => handleDelete(params.row)}
            sx={{
              backgroundColor: "#d32f2f",
              color: "white",
              "&:hover": { backgroundColor: "#c62828" },
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

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
          rows={students}
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
