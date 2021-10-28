import { transformArrayToObjectByField } from "Utils/misc";

const tabs: {
  name: string;
  path: string;
}[] = [
  // {
  //   name: "Home",
  //   path: "/",
  // },
  // {
  //   name: "Blog",
  //   path: "/blog",
  // },
];

const values = {
  name: "Jan Kaifer",
  email: "jan@kaifer.cz",
  cvUrl:
    "https://docs.google.com/document/d/1HuG7H6wAQmUUJnyS3JtPlIeXOQvA1eHDQv5SHx6z3vk/export?format=pdf",
};

const config = {
  tabs,
  values,
  postBasePath: "pages/blog/post",
} as const;

export default config;
