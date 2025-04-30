import { Box, Container, Typography, useTheme } from "@mui/material";
import ToggleLinkGroup from "../components/ToggleLinkGroup";
import ArtworkModal from "../components/ArtworkModal";
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
  const [selectedType, setSelectedType] = useState<string>("All");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

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
            <ToggleLinkGroup
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              types={types}
            />
          </Box>
          <Box
            display="grid"
            gap="40px"
            gridTemplateColumns="repeat(auto-fill, minmax(25%, 1fr))"
            width="100%"
          >
            {artworks &&
              artworks
                .filter(
                  (artwork) =>
                    artwork.type === selectedType || selectedType === "All"
                )
                .map((artwork: Artwork, index: number) => (
                  <Box
                    border={`1px solid ${theme.palette.text.secondary}`}
                    component="img"
                    height="auto"
                    key={index}
                    onClick={() => {
                      setModalOpen(true);
                      setSelectedArtwork(artwork);
                    }}
                    src={artwork.url}
                    sx={{ cursor: "pointer", objectFit: "cover" }}
                    width="100%"
                  />
                ))}
            {modalOpen && (
              <ArtworkModal
                artwork={selectedArtwork}
                onClose={() => setModalOpen(false)}
                open={modalOpen}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ArtPage;
