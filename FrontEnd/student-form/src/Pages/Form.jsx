import React, { useState } from "react";

import {
  Box,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
} from "@mui/material";
import axios from "axios";

const StudentRegistrationForm = ({ id }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    age: "",
    address: "",
    contactNo: "",
    gender: "",
    photo: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      setIsLoading(true);
      const userId = localStorage.getItem("userId");
      console.log("USERID", userId);
      console.log("FormData to send:", formDataToSend);
      console.log("API URL:", `http://localhost:8080/api/v1/acc/${userId}/assignForm`);

      const response = await axios.put(
        `http://localhost:8080/api/v1/acc/${userId}/assignForm`,
        formDataToSend,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", formDataToSend.data);
      alert("Form submitted successfully! 🎉");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      alert(
        `Failed to submit the form. ${
          error.response?.data?.message || "Please try again."
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100vw"
      sx={{ backgroundColor: "#E4EDEC" }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "30%" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Student Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Box display="flex" gap={2} marginBottom={2}>
            <TextField
              fullWidth
              label="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </Box>
          <TextField
            fullWidth
            label="Address"
            name="address"
            multiline
            rows={3}
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contact Number"
            name="contactNo"
            type="tel"
            inputProps={{ pattern: "[0-9]{10}" }}
            value={formData.contactNo}
            onChange={handleChange}
            margin="normal"
            required
          />
          <FormControl margin="normal">
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            component="label"
            sx={{ marginTop: 2, marginBottom: 3 }}
          >
            Upload Photo
            <input
              type="file"
              name="photo"
              accept="image/*"
              hidden
              onChange={handleChange}
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: 1 }}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Register"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default StudentRegistrationForm;