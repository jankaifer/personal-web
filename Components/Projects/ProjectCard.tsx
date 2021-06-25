import { TProject } from "Configs/projects";
import Markdown from "Components/Markdown";
import styled, { css } from "styled-components";

type Props = { project: TProject };

const ProjectCard = ({ project }: Props) => (
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

export default ProjectCard;
