import styled, { css } from "styled-components";

import Layout from "Components/Layout";
import Markdown from "Components/Markdown";
import ProjectList from "Components/Projects/ProjectList";
import { companies, projects, TProject } from "Configs/projects";
import markdown from "Docs/projects.md";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Markdown>{markdown}</Markdown>
      <h2>TODO list</h2>
      <ProjectList projects={projects.filter((p) => !p.finished)} />
      <h2>Finished Projects</h2>
      <ProjectList
        projects={projects
          .filter((p) => p.finished)
          .sort((p1, p2) => {
            const getKey = (p: Pick<TProject, "sourceUrl">) =>
              p.sourceUrl === undefined ? 1 : 0;
            return getKey(p1) - getKey(p2);
          })}
      />
    </Layout>
  );
};

export default Projects;
