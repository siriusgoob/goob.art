import { Box, Card, CardActionArea, Typography, useTheme } from "@mui/material";
import { getFeaturedProject, Project } from "../utils/firebase";
import { getReadTime } from "../utils/utils";
import featuredProjectBrush from "../assets/images/featured_project_brush.webp";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FeaturedProjectCard() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>();

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getFeaturedProject();
      setProject(data);
    };
    fetchProject();
  }, []);

  return (
    <Card
      sx={{
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: "30px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <CardActionArea
        disableRipple
        disableTouchRipple
        onClick={() => navigate(`/projects/${project?.projectId}`)}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
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
            {project?.title}
          </Typography>
          <Typography
            sx={{ color: theme.palette.background.default, mb: 4 }}
            variant="subtitle1"
          >
            {getReadTime(project?.paragraphs)} minute read | {project?.dates}
          </Typography>
          <Typography
            sx={{ color: theme.palette.background.default }}
            variant="body1"
          >
            {project?.description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default FeaturedProjectCard;
