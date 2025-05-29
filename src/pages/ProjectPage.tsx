import { Box, Container, Typography, useTheme } from "@mui/material";
import { NavbarLink } from "../components/Navbar";
import ArtworkModal from "../components/ArtworkModal";
import BulletedLinkList from "../components/BulletedLinkList";
import Image from "../components/Image";
import { getProject, type Artwork, type Project } from "../utils/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadTime } from "../utils/utils";

function ProjectPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProject(projectId ?? "");
      if (!data) {
        navigate("/error");
      }
      setProject(data);
    };
    fetchProject();
  }, [navigate, project, projectId]);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
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
          width="35%"
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
                textAlign: "center",
                textShadow: `0 0 10px ${theme.palette.text.secondary}`,
              }}
              variant="h4"
              width="100%"
            >
              {project?.title}
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
              {project?.description}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.secondary }}
              variant="h5"
            >
              {getReadTime(project?.paragraphs)} minute read | {project?.dates}
            </Typography>
          </Box>
          <NavbarLink text="Go Back to Projects" to="/projects" />
        </Box>
        <Box
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
          width="65%"
        >
          <Image
            artwork={project?.headerImage}
            setModalOpen={setModalOpen}
            sx={{ mb: 8 }}
          />
          <Box mb={8}>
            {project?.paragraphs.map((paragraph: string, index: number) => (
              <Typography
                key={index}
                mb={index === project?.paragraphs.length - 1 ? 0 : 4}
                sx={{ textIndent: "20px" }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
          <Box mb={8}>
            <Typography
              sx={{ color: theme.palette.text.secondary }}
              variant="h2"
            >
              LINKS
            </Typography>
            <BulletedLinkList links={project?.links} />
          </Box>
          <Box
            display="grid"
            gap="40px"
            gridTemplateColumns="repeat(2, 1fr)"
            width="100%"
          >
            {project?.images &&
              project.images.map((artwork: Artwork, index: number) => (
                <Image
                  artwork={artwork}
                  key={index}
                  setModalOpen={setModalOpen}
                />
              ))}
          </Box>
        </Box>
        {modalOpen && (
          <ArtworkModal
            artwork={project?.headerImage}
            onClose={() => setModalOpen(false)}
            open={modalOpen}
          />
        )}
      </Box>
    </Container>
  );
}

export default ProjectPage;
