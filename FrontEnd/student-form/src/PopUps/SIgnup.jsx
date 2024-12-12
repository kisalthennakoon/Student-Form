import { useState } from "react";
import SucessPopup from "./Sucessful";
import {
  Box,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const AuthPopup = ({ open, onClose, onSignIn }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Sign In
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const validate = () => {
    const newErrors = {};
    if (isSignUp) {
      if (!formData.username) newErrors.username = "Username is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      if (isSignUp) {
        try {
          const response = await axios.post(
            "http://localhost:8080/api/v1/acc/saveAcc",
            {
              id: formData.id,
              userName: formData.username,
              password: formData.password,
            }
          );
          alert("Signup successful!\n" + response.data.message);
          setSuccessPopupOpen(true);
          console.log("ID:", response.data.id);
          console.log("Signup Response:", response.data);
        } catch (error) {
          console.error("Signup Error:", error);
          alert("Failed to sign up. Please try again.");
        }
      } else {
        try {
          console.log(formData);
          const response = await axios.post(
            "http://localhost:8080/api/v1/acc/login",
            {
              id : formData.id,
              userName: formData.username,
              password: formData.password,
            }
          );
          const { id } = response.data;
          console.log("ID:", id);
          onSignIn(id);
          alert("Signin successful!\n" + response.data.message);
          console.log("Signin Response:", response.data);
          setSuccessPopupOpen(true);
        } catch (error) {
          console.error("Signin Error:", error);
          alert("Failed to sign in. Please try again.");
        }
      }
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle align="center">{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
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
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {isSignUp && (
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
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
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AuthPopup;


// import { useState } from "react";
// import SuccessPopup from "../PopUps/Sucessful";
// import {
//   Box,
//   TextField,
//   Typography,
//   Button,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogActions,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import axios from "axios";

// const AuthPopup = ({ open, onClose, onLoginSuccess }) => {
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Sign In
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [success, setSuccess] = useState(false); // State to show SuccessPopup

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prev) => !prev);
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.username) newErrors.username = "Username is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (isSignUp && formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         console.log()
//         const url = isSignUp
//           ? "http://localhost:8080/api/v1/acc/saveAcc"
//           : "http://localhost:8080/api/v1/acc/login";
//         const payload = isSignUp
//           ? { userName: formData.username, password: formData.password }
//           : { userName: formData.username, password: formData.password };

//         const response = await axios.post(url, payload);

//         console.log(isSignUp ? "Signup Response:" : "Signin Response:", response.data);

//         if (!isSignUp && response.data?.id) {
//           onLoginSuccess(response.data.id); // Notify parent with object ID
//         }

//         setSuccess(true); // Show SuccessPopup
//       } catch (error) {
//         console.error(isSignUp ? "Signup Error:" : "Signin Error:", error);
//         alert(`Failed to ${isSignUp ? "sign up" : "sign in"}. Please try again.`);
//       }
//     }
//   };

//   return (
//     <div>
//       {success && <SuccessPopup onClose={() => setSuccess(false)} />} {/* Show SuccessPopup */}
//       <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//         <DialogTitle align="center">{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               margin="normal"
//               error={!!errors.username}
//               helperText={errors.username}
//               required
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={handleChange}
//               margin="normal"
//               error={!!errors.password}
//               helperText={errors.password}
//               required
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={togglePasswordVisibility} edge="end">
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             {isSignUp && (
//               <TextField
//                 fullWidth
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 type={showConfirmPassword ? "text" : "password"}
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 margin="normal"
//                 error={!!errors.confirmPassword}
//                 helperText={errors.confirmPassword}
//                 required
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
//                         {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             )}
//             <Box display="flex" justifyContent="center" marginTop={3}>
//               <Button type="submit" variant="contained" color="primary">
//                 {isSignUp ? "Sign Up" : "Sign In"}
//               </Button>
//             </Box>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Box display="flex" justifyContent="space-between" width="100%" paddingX={2}>
//             <Typography variant="body2">
//               {isSignUp ? "Already have an account?" : "Don't have an account?"}
//               <Button
//                 variant="text"
//                 color="primary"
//                 onClick={() => setIsSignUp(!isSignUp)}
//               >
//                 {isSignUp ? "Sign In" : "Sign Up"}
//               </Button>
//             </Typography>
//             <Button onClick={onClose} color="secondary">
//               Cancel
//             </Button>
//           </Box>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default AuthPopup;
