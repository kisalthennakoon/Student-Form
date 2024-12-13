import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessPopup = ({ open = true, onClose, message = "Successful!" }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    if (onClose) onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000} // Adjust auto-hide duration if needed
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        icon={<CheckCircleIcon fontSize="inherit" />}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessPopup;
