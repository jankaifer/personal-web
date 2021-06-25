import { TProject } from "Configs/projects";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: TProject[];
};

const ProjectList = ({ projects }: Props) => (
  <div>
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </div>
);

export default ProjectList;
