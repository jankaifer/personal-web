import styled, { css } from "styled-components";

import { TProject } from "Configs/projects";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: TProject[];
};

const ProjectList = ({ projects }: Props) => {
  const years = [...new Set(projects.map((p) => p.year))].sort().reverse();

  return (
    <div>
      {years.map((year) => (
        <ProjectGroup
          key={year}
          year={year}
          projects={projects
            .filter((p) => p.year === year)
            .sort((p1, p2) => (p1.name > p2.name ? 1 : -1))}
        />
      ))}
    </div>
  );
};

const ProjectGroup = ({
  projects,
  year,
}: {
  projects: TProject[];
  year: number;
}) => (
  <ProjectGroupWrapper>
    <ProjectGroupTimelineWrapper>
      <div className="year">{year}</div>
    </ProjectGroupTimelineWrapper>
    <ProjectGroupProjectsWrapper>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectGroupProjectsWrapper>
  </ProjectGroupWrapper>
);

const ProjectGroupWrapper = styled.div`
  display: flex;
  flex-direction: "row";

  ${({ theme }) => css`
    margin-top: ${theme.spacing(4)}px;
  `}
`;

const ProjectGroupTimelineWrapper = styled.div`
  ${({ theme }) => css`
    & > .year {
      color: ${theme.colors.secondaryText};
      padding-right: ${theme.spacing(2)}px;
    }
  `}
`;
const ProjectGroupProjectsWrapper = styled.div``;

export default ProjectList;
