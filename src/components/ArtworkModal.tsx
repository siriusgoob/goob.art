import { Box, Modal, Typography, useTheme } from "@mui/material";
import { type Artwork } from "../utils/firebase";

interface ArtworkModalProps {
  artwork: Artwork | null;
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
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <>
        <Box
          border={`1px solid ${theme.palette.text.secondary}`}
          display="flex"
          flexDirection="column"
          height="80vh"
          maxWidth="80vw"
        >
          <Box
            borderBottom={`1px solid ${theme.palette.text.secondary}`}
            component="img"
            height="100%"
            src={artwork?.url}
            width="auto"
          />
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "36px",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                textShadow: `0 0 5px ${theme.palette.text.secondary}`,
              }}
              variant="h4"
            >
              {artwork?.title}
            </Typography>
            <Typography variant="body1">{artwork?.description}</Typography>
          </Box>
        </Box>
        <Box
          onClick={() => onClose()}
          sx={{
            cursor: "pointer",
            position: "relative",
            top: "calc(-40vh + 22px)",
            right: "-30px",
          }}
        >
          <Typography
            sx={{ textShadow: `0 0 10px ${theme.palette.text.primary}` }}
            variant="h1"
          >
            X
          </Typography>
        </Box>
      </>
    </Modal>
  );
}

export default ArtworkModal;
