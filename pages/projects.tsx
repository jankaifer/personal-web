import Layout from "Components/Layout";
import Markdown from "Components/Markdown";
import ProjectList from "Components/Projects/ProjectList";
import { projects } from "Configs/projects";
import markdown from "Docs/projects.md";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Markdown>{markdown}</Markdown>
      <ProjectList projects={projects.filter((p) => p.finished)} />
    </Layout>
  );
};

export default Projects;
