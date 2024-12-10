import  { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

const AuthPopup = ({ open, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Sign In
  const [formData, setFormData] = useState({
    username: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (isSignUp) {
      if (!formData.username) newErrors.username = "Username is required";
      if (!formData.studentId) newErrors.studentId = "Student ID is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    } else {
      if (!formData.username) newErrors.username = "Username is required";
      if (!formData.password) newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isSignUp) {
        alert("Signup successful!");
      } else {
        alert("Signin successful!");
      }
      console.log("Form Data:", formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle align="center">{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            error={!!errors.username}
            helperText={errors.username}
            required
          />
          {/* Student ID Field - Only for Sign Up */}
          {isSignUp && (
            <TextField
              fullWidth
              label="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              margin="normal"
              error={!!errors.studentId}
              helperText={errors.studentId}
              required
            />
          )}
          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
            required
          />
          {/* Confirm Password Field - Only for Sign Up */}
          {isSignUp && (
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              required
            />
          )}
          {/* Submit Button */}
          <Box display="flex" justifyContent="center" marginTop={3}>
            <Button type="submit" variant="contained" color="primary">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="space-between" width="100%" paddingX={2}>
          <Typography variant="body2">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <Button
              variant="text"
              color="primary"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </Typography>
          <Button onClick={onClose} color="red">
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AuthPopup;
