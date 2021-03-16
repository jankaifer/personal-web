import Layout from "Components/Layout";
import Markdown from "Components/Markdown";
import markdown from "Docs/projects.md";
import styled, { css } from "styled-components";

type TProject = {
  url?: string;
  name: string;
  description: string;
  sourceUrl?: string;
};

const Projects = () => {
  return (
    <Layout title="Projects">
      <Markdown>{markdown}</Markdown>
      <h2>TODO list</h2>
      {unfinishedProjects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
      <h2>Awesome companies I worked in</h2>
      {companies.map((project) => (
        <Project project={project} key={project.name} />
      ))}
      <h2>Finished Projects</h2>
      {finishedProjects
        .sort((p1, p2) => {
          const getKey = (p: TProject) => (p.sourceUrl === undefined ? 1 : 0);
          return getKey(p1) - getKey(p2);
        })
        .map((project) => (
          <Project project={project} key={project.name} />
        ))}
    </Layout>
  );
};

const ProjectContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)}px ${theme.spacing(1)}px;

    h3 {
      margin: 0;
    }

    p {
      margin: ${theme.spacing(1)}px;
    }

    a.source-code {
      margin-left: ${theme.spacing(2)}px;
    }
  `}
`;

const Project = ({ project }: { project: TProject }) => (
  <ProjectContainer>
    <h3>
      {project.url !== undefined ? (
        <a href={project.url}>{project.name}</a>
      ) : (
        project.name
      )}
      {project.sourceUrl !== undefined && (
        <>
          <a className="source-code" href={project.sourceUrl}>
            [Source code]
          </a>
        </>
      )}
    </h3>
    <Markdown>{project.description}</Markdown>
  </ProjectContainer>
);

const finishedProjects: TProject[] = [
  {
    name: "Pochopím to",
    description: `Simple web app that allows teachers to get instant feedback from students.
    Won multiple awards.
    Created with my friends [Tom](http://www.tomvrbovsky.com/) and [Andrew](https://www.gonzor.cz/).
    `,
    url: "https://pochopimto.cz",
  },
  {
    name: "Snailer.eu",
    description:
      "App that allows you to visualize and compare multiple gpx files.",
    url: "https://snailer.eu",
    sourceUrl: "https://github.com/JanKaifer/bike-tracker",
  },
  {
    name: "Estaj.cz",
    description:
      "PWA app for stables. Helps owners and stable workers to better communicate changes in horse diet etc.",
    url: "https://estaj.cz",
  },
  {
    name: "My website v1",
    description: "My first website, built with Svelte. Svelte is cool.",
    url: "https://v1.web.kaifer.cz/",
  },
  {
    name: "This web",
    description: "This web I built on next.js",
    url: "https://v2.web.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/personal-web/",
  },
  {
    name: "Alley tester",
    description:
      "React + Django app that my mum uses to generate tests for her students. It creates unique questions for each student based on defined rules / custom JS code.",
    url: "https://alley-tester.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/alley-tester",
  },
];

const companies: TProject[] = [
  {
    name: "Retino",
    description:
      "Online service that helps e-shops to handle returns and warranty claims.",
    url: "https://retino.io",
  },
  {
    name: "Netrex",
    description: "Cloud solution for IP cameras.",
    url: "https://netrex.cz",
  },
];

const unfinishedProjects: TProject[] = [
  {
    name: "Runtime for Mindustry logic language",
    description:
      "Simple runtime written in Typescript for easy integration with VSCode extension.",
  },
  {
    name: "Compiler for Mindustry logic",
    description: "Transpiler from higher language to Mindustry logic.",
  },
  {
    name: "Learn Rust",
    description:
      "Would like to create something in Rust because Rust is awesome.",
  },
  {
    name: "Learn Go",
    description: "Go rocks.",
  },
  {
    name: "Create simple Factorio/Mindustry clone",
    description: "Would like to incorporate recursion into the game.",
  },
];

export default Projects;
