import styled, { css } from "styled-components";

import Markdown from "Components/Markdown";
import { TProject } from "Configs/projects";

type Props = { project: TProject };

const ProjectCard = ({ project }: Props) => (
  <ProjectContainer>
    <ProjectHeader>
      {project.url !== undefined ? (
        <a href={project.url}>{project.name}</a>
      ) : (
        project.name
      )}
      {project.sourceUrl !== undefined && (
        <a className="source-code" href={project.sourceUrl}>
          [Source code]
        </a>
      )}
    </ProjectHeader>
    <ProjectTagsWrapper>
      {project.tags.map((tag) => (
        <ProjectTag>{tag}</ProjectTag>
      ))}
    </ProjectTagsWrapper>
    <Markdown>{project.description}</Markdown>
  </ProjectContainer>
);

const ProjectTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProjectTag = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(1)}px;
    margin-top: ${theme.spacing(1)}px;
    color: ${theme.colors.secondaryText};
    font-size: ${theme.sizes.small};
    border-right: 1px solid ${theme.colors.secondaryText};

    &:last-child {
      border-right: 0;
    }
  `}
`;

const ProjectContainer = styled.div`
  &:first-child {
    margin-top: 0;
  }

  ${({ theme }) => css`
    margin-top: ${theme.spacing(3)}px;
    margin-left: ${theme.spacing(1)}px;

    p {
      margin: ${theme.spacing(1)}px;
    }
  `};
`;

const ProjectHeader = styled.h3`
  margin: 0;

  ${({ theme }) => css`
    & > .source-code {
      margin-left: ${theme.spacing(2)}px;
    }
  `}
`;

export default ProjectCard;
