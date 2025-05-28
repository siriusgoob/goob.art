import { Box, Container, Typography } from "@mui/material";
import { NavbarLink } from "../components/Navbar";

function ErrorPage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        mb="100px"
        mt="200px"
        paddingX="100px"
        width="100%"
      >
        <Typography mb={4}>The page you've navigated to does not exist.</Typography>
        <NavbarLink text="Go Back to Home" to="/" />
      </Box>
    </Container>
  );
}

export default ErrorPage;
