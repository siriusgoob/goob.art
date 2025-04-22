import { Box, Container, Typography, useTheme } from "@mui/material";

function ArtPage() {
  const theme = useTheme();

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
          Artwork
        </Typography>
      </Box>
    </Container>
  );
}

export default ArtPage;
