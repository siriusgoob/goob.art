import { Box, Container, Typography, useTheme } from "@mui/material";
import { readAboutText } from "../utils/firebase";
import { useEffect, useState } from "react";
import backgroundCover from "../assets/images/goob_background.webp";

function AboutPage() {
  const theme = useTheme();
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    const fetchParagraphs = async () => {
      const data = await readAboutText();
      setParagraphs(data);
    };
    fetchParagraphs();
  }, []);

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
          {paragraphs &&
            paragraphs.map((text: string, index: number) => (
              <Typography key={index} sx={{ pt: 4 }} variant="body1">
                {text}
              </Typography>
            ))}
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
