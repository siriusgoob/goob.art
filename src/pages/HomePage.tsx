import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import backgroundCover from "../assets/images/goob_background.webp";
import logoGlow from "../assets/images/sg_logo_glow.webp";
import blusky from "../assets/images/blusky.svg";

function HomePage() {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${backgroundCover})`,
        backgroundPosition: "45% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box height="100vh" width="50%" />
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        height="100vh"
        justifyContent="center"
        width="50%"
      >
        <Box component="img" src={logoGlow} width="70%" />
        <Typography sx={{ paddingY: 4, width: "70%" }} variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac ligula nec eros finibus pretium in non nisl. In sit amet nisl eu
          metus tempor.
        </Typography>
        <Button
          disableRipple
          disableFocusRipple
          disableTouchRipple
          href="https://bsky.app/profile/goob.art"
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
          <Box component="img" height="30px" src={blusky} sx={{ pr: 2 }} />
          <Typography sx={{ color: theme.palette.text.primary }}>
            BluSky
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
