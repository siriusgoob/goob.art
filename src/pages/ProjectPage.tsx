import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return <></>;
}

export default ProjectPage;
