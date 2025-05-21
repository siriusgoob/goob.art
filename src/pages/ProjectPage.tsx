import { Box, Container, Typography, useTheme } from "@mui/material";
import { NavbarLink } from "../components/Navbar";
import { getProject, type Project } from "../utils/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// TODO: fix database pull
function ProjectPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>();

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProject(projectId ?? "");
      if (!data) {
        navigate("/error");
      }
      setProject(project);
      console.log(project);
    };
    fetchProject();
  }, [navigate, project, projectId]);

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
        display="flex"
        height="100%"
        mb="100px"
        mt="200px"
        paddingX="100px"
        width="100%"
      >
        <Box
          alignItems="start"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          position="fixed"
          width="40%"
        >
          <Box
            alignItems="start"
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <Typography
              mb="20px"
              sx={{
                color: theme.palette.text.secondary,
                textShadow: `0 0 10px ${theme.palette.text.secondary}`,
              }}
              variant="h4"
            >
              Project Title
            </Typography>
            <Typography
              mb="40px"
              sx={{
                color: theme.palette.primary.main,
                textAlign: "center",
                textShadow: `0 0 10px ${theme.palette.primary.light}`,
              }}
              variant="h4"
              width="100%"
            >
              . . .
            </Typography>
            <Typography mb="40px" variant="body1">
              Project description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse ac ligula nec eros finibus pretium in
              non nisl. In sit amet nisl eu metus tempor aliquet.
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.secondary }}
              variant="h5"
            >
              XX minute read | MM-DD-YYYY
            </Typography>
          </Box>
          <NavbarLink text="Go Back to Projects" to="/projects" />
        </Box>
        <Box
          height="100%"
          marginX="100px"
          sx={{
            backgroundColor: theme.palette.text.secondary,
            boxShadow: `0 0 10px 1px ${theme.palette.text.secondary}`,
          }}
          width="1px"
        />
        <Box
          alignItems="start"
          display="flex"
          flexDirection="column"
          width="60%"
        ></Box>
      </Box>
    </Container>
  );
}

export default ProjectPage;
