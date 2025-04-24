import { Box, Modal, Typography, useTheme } from "@mui/material";

interface ArtworkModalProps {
  artwork: {
    title: string;
    description: string;
    imageUrl: string;
  };
  onClose: () => void;
  open: boolean;
}

function ArtworkModal({ artwork, onClose, open }: ArtworkModalProps) {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "8px",
          boxShadow: 24,
          padding: "16px",
          width: "80vw",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "16px" }}>
          {artwork.title}
        </Typography>
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          style={{ width: "100%" }}
        />
        <Typography variant="body1" sx={{ marginTop: "16px" }}>
          {artwork.description}
        </Typography>
      </Box>
    </Modal>
  );
}

export default ArtworkModal;
