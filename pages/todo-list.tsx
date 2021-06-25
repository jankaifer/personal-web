import Layout from "Components/Layout";
import Markdown from "Components/Markdown";
import ProjectList from "Components/Projects/ProjectList";
import { projects } from "Configs/projects";
import markdown from "Docs/todo-list.md";

const TodoList = () => (
  <Layout title="Todo list">
    <Markdown>{markdown}</Markdown>
    <ProjectList projects={projects.filter((p) => !p.finished)} />
  </Layout>
);

export default TodoList;
