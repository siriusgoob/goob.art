import { Box, Container, Typography, useTheme } from "@mui/material";

function ProjectsPage() {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.background.default} 100%)`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        marginTop="200px"
        paddingX="100px"
        width="100%"
      >
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            mb: "100px",
            textShadow: `0 0 10px ${theme.palette.text.secondary}`,
          }}
          variant="h1"
        >
          Projects
        </Typography>
      </Box>
    </Container>
  );
}

export default ProjectsPage;
