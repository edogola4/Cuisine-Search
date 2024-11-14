import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.secondary",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Loading, please wait...
      </Typography>
      <LinearProgress
        color="primary"
        sx={{
          width: "80%",
          height: 6,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

export default Loader;
