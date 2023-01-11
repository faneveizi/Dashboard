import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, description }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ mb: "5px" }}
        color={theme.palette.secondary[100]}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[200]}>
        {description}
      </Typography>
    </Box>
  );
};

export default Header;
