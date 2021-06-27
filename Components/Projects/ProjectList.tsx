import CardList from "Components/CardList";
import config from "Config";

type Props = {
  projects: TProject[];
};

const ProjectList = ({ projects }: Props) => (
  <CardList cards={projects.map(getCardFromProject)} />
);

const getCardFromProject = (project: TProject): TCard => ({
  title: project.name,
  date: String(project.year),
  pinned: project.active,
  markdownDescription: project.description,
  tags: project.tags.sort(
    (t1, t2) => config.tags.indexOf(t1) - config.tags.indexOf(t2)
  ),
  url: project.url,
  sourceUrl: project.sourceUrl,
});

export default ProjectList;
