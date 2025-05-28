import { Box, useTheme } from "@mui/material";
import { type Artwork } from "../utils/firebase";
import React from "react";

interface ImageProps {
  artwork: Artwork | null | undefined;
  key?: number;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedArtwork?: React.Dispatch<React.SetStateAction<Artwork | null 
  | undefined>>;
}

function Image({ artwork, key, setModalOpen, setSelectedArtwork }: ImageProps) {
  const theme = useTheme();

  return (
    <Box
      border={`1px solid ${theme.palette.text.secondary}`}
      component="img"
      height="auto"
      key={key}
      onClick={() => {
        setModalOpen(true);
        if (setSelectedArtwork) setSelectedArtwork(artwork);
      }}
      src={artwork?.url}
      sx={{ cursor: "pointer", objectFit: "cover" }}
      width="100%"
    />
  );
}

export default Image;
