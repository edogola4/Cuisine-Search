import React from "react";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
//import { Alert as MuiAlert } from "@mui/material";

const Alert = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <Snackbar
      open={open}
      TransitionComponent={SlideTransition}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#FF7043",
          color: "white",
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          fontSize: "1rem",
          padding: "8px 16px",
        },
      }}
      message="Recipe is already in your favorite list"
    />
  );
};

export default Alert;
