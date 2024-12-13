


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Paper, Typography, Box, Avatar } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { deepOrange } from "@mui/material/colors";

// const DetailsEdit = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const columns = [
//     { field: "id", headerName: "ID", width: 100 },
//     {
//       field: "name",
//       headerName: "Username",
//       width: 200,
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 250,
//       renderCell: (params) => (
//         <>
//           <Button
//             variant="contained"
//             startIcon={<EditIcon />}
//             size="small"
//             onClick={() => handleEdit(params.row)}
//             sx={{
//               backgroundColor: "#1976d2",
//               color: "white",
//               marginRight: "10px",
//               "&:hover": {
//                 backgroundColor: "#1565c0",
//               },
//             }}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<DeleteIcon />}
//             size="small"
//             onClick={() => handleDelete(params.row)}
//             sx={{
//               backgroundColor: "#d32f2f",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#c62828",
//               },
//             }}
//           >
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   const handleEdit = (row) => {
//     alert(`Editing entry for: ${row.name}`);
//     console.log("Edit Data:", row);
//   };

//   const handleDelete = (row) => {
//     alert(`Deleted entry for: ${row.name}`);
//     console.log("Deleted Data:", row);
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/v1/acc/getAll")
//       .then((response) => {
//         // Map the API response to extract only `username`
//         const mappedRows = response.data.map((item, index) => ({
//           id: index + 1, // Use a unique ID for the DataGrid
//           name: item.userName, // Map username to the table
//         }));
//         setRows(mappedRows);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Failed to fetch data. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       sx={{
//         minHeight: "100vh",
//         width: "100vw",
//         backgroundColor: "#E4EDEC",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           height: 450,
//           width: "80%",
//           marginTop: "20px",
//           borderRadius: "10px",
//           padding: "70px",
//           textAlign: "justify",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: "bold", color: "#333" }}
//         >
//           Edit User Details
//         </Typography>

//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={10}
//           rowsPerPageOptions={[5, 10]}
//           sx={{
//             border: 0,
//             "& .MuiDataGrid-columnHeaders": {
//               backgroundColor: "#1976d2",
//               color: "black",
//               fontSize: "16px",
//             },
//             "& .MuiDataGrid-cell": {
//               padding: "10px",
//               fontSize: "14px",
//             },
//           }}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default DetailsEdit;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Paper, Typography, Box } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const DetailsEdit = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const columns = [
//     { field: "id", headerName: "ID", width: 100 },
//     {
//       field: "name",
//       headerName: "Username",
//       width: 400,
//     },
//     {
//       field: "studentId",
//       headerName: "Student ID",
//       width: 400,
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 250,
//       renderCell: (params) => (
//         <>
//           <Button
//             variant="contained"
//             startIcon={<EditIcon />}
//             size="small"
//             onClick={() => handleEdit(params.row)}
//             sx={{
//               backgroundColor: "#1976d2",
//               color: "white",
//               marginRight: "10px",
//               "&:hover": {
//                 backgroundColor: "#1565c0",
//               },
//             }}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<DeleteIcon />}
//             size="small"
//             onClick={() => handleDelete(params.row)}
//             sx={{
//               backgroundColor: "#d32f2f",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#c62828",
//               },
//             }}
//           >
//             Delete Form
//           </Button>

//           </>
//       ),
//     },
//   ];

//   const handleEdit = (row) => {
//     alert(`Editing entry for: ${row.name}`);
//     console.log("Edit Data:", row);
//   };

//   const handleDelete = async (row) => {
//     const confirmDelete = window.confirm(
//       `Are you sure you want to delete ${row.name}?`
//     );
//     if (!confirmDelete) return;

//     try {
//       const userId = localStorage.getItem("userId");
//       console.log("USERID", userId);
//       const response = await axios.delete(
//         `http://localhost:8080/api/v1/acc/${userId}/deleteForm`
//       );
//       if (response.status === 200) {
//         alert(`Successfully deleted: ${row.name}`);
//         setRows((prevRows) => prevRows.filter((item) => item.id !== row.id));
//       }
//     } catch (error) {
//       console.error("Error deleting entry:", error);
//       alert("Failed to delete the entry. Please try again.");
//     }
//   };



//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/v1/form/getAll")
//       .then((response) => {
//         // Map the API response to extract only `username`
//         const mappedRows = response.data.map((item, index) => ({
//           id: index + 1, // Use a unique ID for the DataGrid
//           name: item.studentName, // Map username to the table
//           studentId: item.studentId,
//         }));
//         setRows(mappedRows);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Failed to fetch data. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       sx={{
//         minHeight: "100vh",
//         width: "100vw",
//         backgroundColor: "#E4EDEC",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           height: 450,
//           width: "80%",
//           marginTop: "20px",
//           borderRadius: "10px",
//           padding: "70px",
//           textAlign: "justify",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: "bold", color: "#333" }}
//         >
//           Edit User Details
//         </Typography>

//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={10}
//           rowsPerPageOptions={[5, 10]}
//           sx={{
//             border: 0,
//             "& .MuiDataGrid-columnHeaders": {
//               backgroundColor: "#1976d2",
//               color: "black",
//               fontSize: "16px",
//             },
//             "& .MuiDataGrid-cell": {
//               padding: "10px",
//               fontSize: "14px",
//             },
//           }}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default DetailsEdit;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Paper, Typography, Box, Avatar } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { deepPurple, deepOrange, blue, green } from "@mui/material/colors";

// const DetailsEdit = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to generate color based on the name
//   const getColorForName = (name) => {
//     const colors = [deepPurple[500], deepOrange[500], blue[500], green[500]];
//     const charCode = name ? name.charCodeAt(0) : 0;
//     return colors[charCode % colors.length];
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 100 },
//     {
//       field: "avatar",
//       headerName: "Avatar",
//       width: 150,
//       renderCell: (params) => (
//         <Avatar
//           sx={{
//             bgcolor: getColorForName(params.row.name),
//             color: "white",
//           }}
//         >
//           {params.row.name?.charAt(0).toUpperCase()}
//         </Avatar>
//       ),
//     },
//     {
//       field: "name",
//       headerName: "Username",
//       width: 400,
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 250,
//       renderCell: (params) => (
//         <>
//           <Button
//             variant="contained"
//             startIcon={<EditIcon />}
//             size="small"
//             onClick={() => handleEdit(params.row)}
//             sx={{
//               backgroundColor: "#1976d2",
//               color: "white",
//               marginRight: "10px",
//               "&:hover": {
//                 backgroundColor: "#1565c0",
//               },
//             }}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<DeleteIcon />}
//             size="small"
//             onClick={() => handleDelete(params.row)}
//             sx={{
//               backgroundColor: "#d32f2f",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#c62828",
//               },
//             }}
//           >
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   const handleEdit = (row) => {
//     alert(`Editing entry for: ${row.name}`);
//     console.log("Edit Data:", row);
//   };

//   const handleDelete = async (row) => {
//     const confirmDelete = window.confirm(
//       `Are you sure you want to delete ${row.name}?`
//     );
//     if (!confirmDelete) return;

//     try {
//       const userId = localStorage.getItem("userId");
//       console.log("USERID", userId);
//       const response = await axios.delete(
//         `http://localhost:8080/api/v1/acc/${userId}/deleteForm`
//       );
//       if (response.status === 200) {
//         alert(`Successfully deleted: ${row.name}`);
//         setRows((prevRows) => prevRows.filter((item) => item.id !== row.id));
//       }
//     } catch (error) {
//       console.error("Error deleting entry:", error);
//       alert("Failed to delete the entry. Please try again.");
//     }
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/v1/acc/getAll")
//       .then((response) => {
//         // Map the API response to extract only `username`
//         const mappedRows = response.data.map((item, index) => ({
//           id: index + 1, // Use a unique ID for the DataGrid
//           name: item.userName, // Map username to the table
//         }));
//         setRows(mappedRows);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Failed to fetch data. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       sx={{
//         minHeight: "100vh",
//         width: "100vw",
//         backgroundColor: "#E4EDEC",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           height: 450,
//           width: "80%",
//           marginTop: "20px",
//           borderRadius: "10px",
//           padding: "70px",
//           textAlign: "justify",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: "bold", color: "#333" }}
//         >
//           Edit User Details
//         </Typography>

//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={10}
//           rowsPerPageOptions={[5, 10]}
//           sx={{
//             border: 0,
//             "& .MuiDataGrid-columnHeaders": {
//               backgroundColor: "#1976d2",
//               color: "black",
//               fontSize: "16px",
//             },
//             "& .MuiDataGrid-cell": {
//               padding: "10px",
//               fontSize: "14px",
//             },
//           }}
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default DetailsEdit;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Paper, Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DetailsEdit = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "studentId", headerName: "Student ID", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
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
              "&:hover": {
                backgroundColor: "#1565c0",
              },
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
              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
          >
            Delete Form
          </Button>
        </>
      ),
    },
  ];

  const handleEdit = (row) => {
    alert(`Editing entry for: ${row.name}`);
    console.log("Edit Data:", row);
  };

  const handleDelete = async (row) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${row.name}?`
    );
    if (!confirmDelete) return;

    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.delete(
        `http://localhost:8080/api/v1/acc/${userId}/deleteForm`
      );
      if (response.status === 200) {
        alert(`Successfully deleted: ${row.name}`);
        setRows((prevRows) => prevRows.filter((item) => item.id !== row.id));
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
      alert("Failed to delete the entry. Please try again.");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/form/getAll")
      .then((response) => {
        const mappedRows = response.data.map((item, index) => ({
          id: index + 1,
          name: item.studentName,
          studentId: item.studentId,
        }));
        setRows(mappedRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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
          Edit User Details
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
