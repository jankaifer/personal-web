import { isRight } from "fp-ts/Either";
import fs from "fs";
import matter from "gray-matter";
import * as D from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import path from "path";
import remark from "remark";
import html from "remark-html";

import { assert } from "Utils/guards";

const postDataDecoder = D.type({
  title: D.string,
  date: D.string,
});

const postsDirectory = path.join(process.cwd(), "Posts");

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

export const getPostFileMatter = (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
};

export const getPostData = (id: string) => {
  const fileMatter = getPostFileMatter(id);
  const matterResultData = postDataDecoder.decode(fileMatter.data);

  assert(
    isRight(matterResultData),
    `post ${id} has wrong metadata: ${PathReporter.report(matterResultData)}`
  );

  return {
    id,
    ...matterResultData.right,
  };
};

export const getPostContent = async (id: string) => {
  const fileMatter = getPostFileMatter(id);
  const processedContent = await remark().use(html).process(fileMatter.content);
  const contentHtml = processedContent.toString();

  return contentHtml;
};

export const getSortedPostsData = () =>
  getAllPostIds()
    .map(getPostData)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
