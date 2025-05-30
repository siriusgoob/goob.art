import { Box, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";

interface NavbarLinkProps {
  text: string;
  to: string;
}

export function NavbarLink({ text, to }: NavbarLinkProps) {
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

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        height: "120px",
        justifyContent: "end",
        padding: "35px 35px 35px 0",
        position: "absolute",
        right: 0,
        top: 0,
        width: "50vw",
      }}
    >
      <NavbarLink text="Home" to="/" />
      <NavbarLink text="Projects" to="/projects" />
      <NavbarLink text="Art" to="/art" />
      <NavbarLink text="About" to="/about" />
      <Box
        component="img"
        src={logo}
        height="50px"
        sx={{
          cursor: "pointer",
          filter: "drop-shadow(0 0 10px rgba(220, 205, 166, 0.5))",
          transition: "filter 0.1s ease-in-out",
          "&:hover": {
            filter: "drop-shadow(0 0 20px rgba(220, 205, 166, 0.5))",
          },
        }}
        onClick={() => navigate("/")}
        width="50px"
      />
    </Box>
  );
}

export default Navbar;
