import config from "Config";
import glob from "glob";

const loadBlog = (blogTag: string): TPost => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const importedData = require(`../${config.postBasePath}/${blogTag}.mdx`);
  const meta = importedData.meta as TMeta;

  return {
    tag: blogTag,
    title: meta.title,
    date: meta.date,
    description: meta.description,
  };
};

export const getBlogs = () => {
  const blogTags = glob
    .sync(`${config.postBasePath}/*`)
    .map((path: string) => path.split("/").reverse()[0].split(".")[0]);
  return blogTags.map(loadBlog);
};
