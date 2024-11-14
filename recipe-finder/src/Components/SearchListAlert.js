import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Snackbar, Slide, IconButton, Typography } from "@mui/material";
import { Close, Search } from "@mui/icons-material";

const SearchListAlert = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  const action = (
    <>
      <Link to="/SearchList" style={{ textDecoration: "none", color: "inherit" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          startIcon={<Search />}
          sx={{ marginRight: 1 }}
        >
          View Full List
        </Button>
      </Link>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Snackbar
        open={open}
        TransitionComponent={SlideTransition}
        autoHideDuration={7000}
        onClose={handleClose}
        message={
          <Typography variant="body2" style={{ fontWeight: 500 }}>
            Search results may be limited. Click "View Full List" to see all available items!
          </Typography>
        }
        action={action}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default SearchListAlert;
