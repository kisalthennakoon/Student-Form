import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessPopup = () => {
  const [open, setOpen] = useState(true); // Default to open

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={10000} 
      onClose={handleClose} 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

    >
      <Alert
        onClose={handleClose}
        severity="success"
        icon={<CheckCircleIcon fontSize="inherit" />}
        sx={{ width: "100%" }}

      >
        Successfully Deleted!
      </Alert>
    </Snackbar>
  );
};

export default SuccessPopup;
