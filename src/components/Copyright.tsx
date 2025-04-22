import { Typography, useTheme } from "@mui/material";

function Copyright() {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        bottom: "15px",
        color: theme.palette.text.secondary,
        position: "absolute",
        right: "15px",
      }}
      variant="copyright"
    >
      © 2025 Austin Lopez McDonald. All Rights Reserved.
    </Typography>
  );
}

export default Copyright;
