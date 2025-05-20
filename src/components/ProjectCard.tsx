import { Box, Card, CardActionArea, Typography, useTheme } from "@mui/material";
import { type Project } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import projectCard1 from "../assets/images/project_card_1.webp";
import projectCard2 from "../assets/images/project_card_2.webp";
import projectCard3 from "../assets/images/project_card_3.webp";
import projectCard4 from "../assets/images/project_card_4.webp";

interface ProjectCardProps {
  index: number;
  project: Project;
}

function ProjectCard({ index, project }: ProjectCardProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const projectCardImages = [
    projectCard1,
    projectCard2,
    projectCard3,
    projectCard4,
  ];

  return (
    <Card
      sx={{
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: "30px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        minWidth: "45%",
        position: "relative",
        width: "45%",
      }}
    >
      <CardActionArea
        disableRipple
        disableTouchRipple
        onClick={() => navigate(`/projects/${project.projectId}`)}
      >
        <Box component="img" src={projectCardImages[index % 4]} width="100%" />
        <Box
          display="flex"
          flexDirection="column"
          left="0"
          paddingX={8}
          position="absolute"
          sx={{ transform: "translateY(-50%)" }}
          top="50%"
          width="100%"
        >
          <Typography sx={{ color: theme.palette.accent.light }} variant="h4">
            {project.title}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.secondary, mb: 4 }}
            variant="subtitle1"
          >
            XX minute read | {project.dates}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.secondary }}
            variant="body1"
          >
            {project.description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
