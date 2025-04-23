import { Box, Container, Typography } from "@mui/material";
import Button from "../components/Button";
import Copyright from "../components/Copyright";
import backgroundCover from "../assets/images/goob_background.webp";
import logoGlow from "../assets/images/sg_logo_glow.webp";
import bluesky from "../assets/images/blusky.svg";

function HomePage() {
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
          href="https://bsky.app/profile/goob.art"
          icon={bluesky}
          text="BlueSky"
        />
      </Box>
      <Copyright />
    </Container>
  );
}

export default HomePage;
