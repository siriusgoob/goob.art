import { Box, Typography } from "@mui/material";
import dividingBrush from "../assets/images/dividing_brush.webp";
import { getMissionAndVision } from "../utils/firebase";
import { useEffect, useState } from "react";

// TODO: get from firebase
function MissionVision() {
  const [missionAndVision, setMissionAndVision] = useState<[string, string]>([
    "",
    "",
  ]);

  useEffect(() => {
    const fetchMissionAndVision = async () => {
      const data = await getMissionAndVision();
      setMissionAndVision(data);
    };
    fetchMissionAndVision();
  }, []);

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
        <Typography variant="body2">{missionAndVision[0]}</Typography>
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
        <Typography variant="body2">{missionAndVision[1]}</Typography>
      </Box>
    </Box>
  );
}

export default MissionVision;
