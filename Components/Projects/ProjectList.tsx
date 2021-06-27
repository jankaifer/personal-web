import styled, { css } from "styled-components";

import { TProject } from "Configs/projects";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: TProject[];
};

const ProjectList = ({ projects }: Props) => {
  const active = projects.filter((p) => p.active);
  const notActive = projects.filter((p) => !p.active);
  const years = [...new Set(notActive.map((p) => p.year))].sort().reverse();

  return (
    <div>
      {active.length > 0 && (
        <ProjectGroup
          groupName={"Active"}
          projects={active.sort((p1, p2) => (p1.name > p2.name ? 1 : -1))}
        />
      )}
      {years.map((year) => (
        <ProjectGroup
          key={year}
          groupName={String(year)}
          projects={notActive
            .filter((p) => p.year === year)
            .sort((p1, p2) => (p1.name > p2.name ? 1 : -1))}
        />
      ))}
    </div>
  );
};

const ProjectGroup = ({
  projects,
  groupName,
}: {
  projects: TProject[];
  groupName: string;
}) => (
  <ProjectGroupWrapper>
    <ProjectGroupTimelineWrapper>
      <div className="tag">{groupName}</div>
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

  ${({ theme }) => css`
    margin-top: ${theme.spacing(4)}px;

    ${theme.breakpoints.onBreakpoint(
      "sm",
      css`
        flex-direction: column;
      `,
      css`
        flex-direction: row;
      `
    )}
  `}
`;

const ProjectGroupTimelineWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    & > .tag {
      color: ${theme.colors.secondaryText};
      margin: 0 ${theme.spacing(2)}px;
      margin-bottom: ${theme.spacing(4)}px;

      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.secondaryText};
      border-left: none;
      border-right: none;
    }
  `}
`;
const ProjectGroupProjectsWrapper = styled.div``;

export default ProjectList;
