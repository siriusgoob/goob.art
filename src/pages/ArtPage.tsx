import { Box, Container, Typography, useTheme } from "@mui/material";
import ToggleLinkGroup from "../components/ToggleLinkGroup";
import {
  type Artwork,
  getAllArtwork,
  getAllArtworkTypes,
} from "../utils/firebase";
import { useEffect, useState } from "react";

function ArtPage() {
  const theme = useTheme();
  const [types, setTypes] = useState<string[]>([]);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const data = await getAllArtworkTypes();
      setTypes(["All"].concat(data));
    };
    fetchTypes();
    const fetchArtworks = async () => {
      const data = await getAllArtwork();
      setArtworks(data);
    };
    fetchArtworks();
  }, []);

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
        <Box display="flex" gap="100px">
          <Box display="flex" flexDirection="column">
            <Typography
              sx={{
                color: theme.palette.accent.light,
                pb: 4,
                textShadow: `0 0 10px ${theme.palette.accent.main}`,
              }}
              variant="h3"
            >
              Categories
            </Typography>
            <ToggleLinkGroup selectedType="All" types={types} />
          </Box>
          <Box>
            {artworks &&
              artworks.map((artwork: Artwork, index: number) => (
                <Box key={index} sx={{ pt: 4 }}>
                  <Typography variant="h3">{artwork.title}</Typography>
                  <img src={artwork.url} alt={artwork.title} width="300" />
                  <Typography variant="body1">{artwork.description}</Typography>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ArtPage;
