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

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    age: "",
    address: "",
    contactNo: "",
    gender: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully! 🎉");
    console.log("Form Data:", formData);
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
          {/* Name */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />

          {/* Student ID and Age */}
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

          {/* Address */}
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

          {/* Contact Number */}
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

          {/* Gender */}
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

          {/* Photo */}
          <Button
            variant="contained"
            component="label"
            sx={{ marginTop: 2, marginBottom: 3, marginLeft: 15 }}
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

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: 1 }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default StudentRegistrationForm;
