import { Box, Container, Typography, useTheme } from "@mui/material";
import backgroundCover from "../assets/images/goob_background.webp";

function AboutPage() {
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
        height="100vh"
        justifyContent="center"
        width="50%"
      >
        <Box
          alignItems="start"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="70%"
        >
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              textShadow: `0 0 10px ${theme.palette.text.secondary}`,
            }}
            variant="h1"
          >
            About
          </Typography>
          <Typography sx={{ paddingY: 4 }} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac ligula nec eros finibus pretium in non nisl. In sit amet nisl eu
            metus tempor aliquet. Nam sodales, eros pretium auctor aliquet,
            velit quam commodo dui, ornare ultrices odio nunc et mi. Aliquam
            pharetra ultricies augue, at elementum diam vulputate vel. Aliquam
            non sodales nibh. Fusce tincidunt auctor lectus, sit amet feugiat
            enim dictum sed. Sed a elementum nunc, vel suscipit ipsum. Sed
            pharetra interdum metus id auctor.
          </Typography>
          <Typography sx={{ paddingY: 4 }} variant="body1">
            Ut viverra faucibus orci, sit amet eleifend urna. Aliquam leo justo,
            rutrum accumsan luctus nec, tempor imperdiet tortor.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
