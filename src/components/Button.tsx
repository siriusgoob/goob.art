import { Box, Button as MuiButton, Typography, useTheme } from "@mui/material";

interface ButtonProps {
  href: string;
  icon?: string;
  text: string;
}

function Button({ href, icon, text }: ButtonProps) {
  const theme = useTheme();

  return (
    <MuiButton
      disableRipple
      disableFocusRipple
      disableTouchRipple
      href={href}
      rel="noopener noreferrer"
      sx={{
        backgroundColor: "transparent",
        border: `4px solid ${theme.palette.text.primary}`,
        borderRadius: "10px",
        boxShadow: `0 0 10px ${theme.palette.text.secondary}`,
        transition: "box-shadow 0.1s ease-in-out",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: `0 0 20px ${theme.palette.text.secondary}`,
        },
      }}
      target="_blank"
    >
      <Box component="img" height="30px" src={icon} sx={{ pr: 2 }} />
      <Typography sx={{ color: theme.palette.text.primary }}>{text}</Typography>
    </MuiButton>
  );
}

export default Button;
