import { NavLink } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";

interface NavbarLinkProps {
  text: string;
  to: string;
}

function NavbarLink({ text, to }: NavbarLinkProps) {
  const theme = useTheme();

  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
        paddingRight: "50px",
        textDecoration: "none",
      })}
      to={to}
    >
      <Typography
        sx={{
          textShadow: `0 0 10px ${theme.palette.text.secondary}`,
          transition: "text-shadow 0.1s ease-in-out",
          "&:hover": {
            textShadow: `0 0 20px ${theme.palette.text.secondary}`,
          },
        }}
        variant="navbar"
      >
        {text}
      </Typography>
    </NavLink>
  );
}

export default NavbarLink;
