import { Box, Typography } from "@mui/material";
import dividingBrush from "../assets/images/dividing_brush.webp";

// TODO: get from firebase
function MissionVision() {
  return (
    <Box alignItems="center" display="flex" justifyContent="center" mb="200px">
      <Box
        alignItems="end"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="37.5%"
      >
        <Typography mb="20px" variant="h2">
          Mission
        </Typography>
        <Typography variant="body2">
          A mission statement is a crucial aspect of any business or individual.
          Your mission statement should reflect your purpose and the audience
          you are trying to reach.
        </Typography>
      </Box>
      <Box component="img" src={dividingBrush} width="25%" />
      <Box
        alignItems="start"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="37.5%"
      >
        <Typography mb="20px" variant="h2">
          Vision
        </Typography>
        <Typography variant="body2">
          A vision statement is an important tool that helps define the
          direction and purpose of your work. It should be concise, inspiring,
          and reflective of values.
        </Typography>
      </Box>
    </Box>
  );
}

export default MissionVision;
