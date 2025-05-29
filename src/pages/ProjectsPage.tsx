import { Box, Container, Typography, useTheme } from "@mui/material";
import MissionVision from "../components/MissionVision";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects, type Project } from "../utils/firebase";
import { useEffect, useState } from "react";
import { serializeProjects } from "../utils/utils";

function ProjectsPage() {
  const theme = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setProjects(data);
      localStorage.setItem("Projects", serializeProjects(data));
    };
    fetchProjects();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.background.default} 100%)`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        mt="200px"
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
          width="100%"
        >
          Projects
        </Typography>
        <Box display="flex" flexDirection="column" width="90%">
          <MissionVision />
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            mb="200px"
            width="100%"
          >
            <Typography
              mb="40px"
              sx={{
                color: theme.palette.accent.light,
                textShadow: `0 0 10px ${theme.palette.accent.main}`,
              }}
              variant="h3"
              width="100%"
            >
              Featured Project
            </Typography>
            <FeaturedProjectCard />
          </Box>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            mb="200px"
            width="100%"
          >
            <Typography
              mb="40px"
              sx={{
                color: theme.palette.accent.light,
                textShadow: `0 0 10px ${theme.palette.accent.main}`,
              }}
              variant="h3"
              width="100%"
            >
              Other Projects
            </Typography>
            <Box display="flex" flexWrap="wrap" gap="10%" width="100%">
              {projects &&
                projects.map((project: Project, index: number) => (
                  <ProjectCard index={index} key={index} project={project} />
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectsPage;
