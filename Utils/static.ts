import config from "Config";

const loadBlog = (blogTag: string) => {
  const importedData = require(`../${config.postBasePath}/${blogTag}.mdx`);
  const meta = importedData.meta as TMeta;

  return {
    tag: blogTag,
    title: meta.title,
    date: meta.date ?? null,
  };
};

export const getBlogs = () => {
  const blogTags = require("glob")
    .sync(`${config.postBasePath}/*`)
    .map((path: string) => path.split("/").reverse()[0].split(".")[0]);
  return blogTags.map(loadBlog);
};
