import { Box, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

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
      {/* TODO: add mini logo below */}
      <Box
        height="50px"
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "100%",
          boxShadow: `0 0 10px ${theme.palette.text.secondary}`,
          cursor: "pointer",
          transition: "box-shadow 0.1s ease-in-out",
          "&:hover": {
            boxShadow: `0 0 20px ${theme.palette.text.secondary}`,
          },
        }}
        onClick={() => navigate("/")}
        width="50px"
      />
    </Box>
  );
}

export default Navbar;
