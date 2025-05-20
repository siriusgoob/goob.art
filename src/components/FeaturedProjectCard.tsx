import { Box, Typography, useTheme } from "@mui/material";
import featuredProjectBrush from "../assets/images/featured_project_brush.webp";

// TODO: get featured card from firebase
function FeaturedProjectCard() {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      sx={{ cursor: "pointer" }}
      width="100%"
    >
      <Box component="img" src={featuredProjectBrush} width="90%" />
      <Box
        display="flex"
        flexDirection="column"
        left="22%"
        position="absolute"
        sx={{ transform: "translateY(-50%)" }}
        top="50%"
        width="56%"
      >
        <Typography
          sx={{ color: theme.palette.background.default }}
          variant="h1"
        >
          Project Title
        </Typography>
        <Typography
          sx={{ color: theme.palette.background.default, mb: 4 }}
          variant="subtitle1"
        >
          XX minute read | MM-DD-YYYY
        </Typography>
        <Typography
          sx={{ color: theme.palette.background.default }}
          variant="body1"
        >
          Project description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse ac ligula nec eros finibus pretium in non nisl. In
          sit amet nisl eu metus tempor aliquet.
        </Typography>
      </Box>
    </Box>
  );
}

export default FeaturedProjectCard;