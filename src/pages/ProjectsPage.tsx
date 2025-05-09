import { Box, Container, Typography, useTheme } from "@mui/material";
import { getAllProjects, type Project } from "../utils/firebase";
import { useEffect, useState } from "react";
import dividingBrush from "../assets/images/dividing_brush.webp";
import featuredProjectBrush from "../assets/images/featured_project_brush.webp";
import projectCard1 from "../assets/images/project_card_1.webp";
import projectCard2 from "../assets/images/project_card_2.webp";
import projectCard3 from "../assets/images/project_card_3.webp";
import projectCard4 from "../assets/images/project_card_4.webp";

function ProjectsPage() {
  const theme = useTheme();
  const projectCardImages = [
    projectCard1,
    projectCard2,
    projectCard3,
    projectCard4,
  ];

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setProjects(data);
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
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            mb="200px"
          >
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
                A mission statement is a crucial aspect of any business or
                individual. Your mission statement should reflect your purpose
                and the audience you are trying to reach.
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
                direction and purpose of your work. It should be concise,
                inspiring, and reflective of values.
              </Typography>
            </Box>
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
              Featured Project
            </Typography>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              position="relative"
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
                  Project description Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse ac ligula nec eros finibus
                  pretium in non nisl. In sit amet nisl eu metus tempor aliquet.
                </Typography>
              </Box>
            </Box>
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
                  <Box
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    flexWrap="wrap"
                    justifyContent="center"
                    minWidth="45%"
                    position="relative"
                    width="45%"
                  >
                    <Box
                      component="img"
                      src={projectCardImages[index % 4]}
                      width="100%"
                    />
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
                      <Typography
                        sx={{ color: theme.palette.accent.light }}
                        variant="h4"
                      >
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
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectsPage;
