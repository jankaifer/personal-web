import { transformArrayToObjectByField } from "Utils/misc";

const tabs: {
  name: string;
  path: string;
}[] = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "Blog",
  //   path: "/blog",
  // },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "TODO list",
    path: "/todo-list",
  },
];

const values = {
  name: "Jan Kaifer",
  email: "jan@kaifer.cz",
  cvUrl:
    "https://docs.google.com/document/d/1HuG7H6wAQmUUJnyS3JtPlIeXOQvA1eHDQv5SHx6z3vk/export?format=pdf",
};

const tags = [
  // Framework
  "React",
  "React Native",
  "Svelte",
  "Django",
  "Firebase",
  "Rust",
  "Go",
  // Type
  "Mobile app",
  "Web app",
  "Backend",
  "Skill",
] as const;

export type _TTag = typeof tags[number];
const companyNames = ["Netrex", "Camstreamer", "Retino"] as const;

const companies: TCompany[] = [
  {
    name: "Retino",
    description:
      "Online service that helps e-shops to handle returns and warranty claims.",
    url: "https://retino.io",
  },
  {
    name: "Netrex",
    description: "Cloud solutions for IP cameras.",
    url: "https://netrex.cz",
  },
  {
    name: "Camstreamer",
    description: "Live streaming & retail apps for axis cameras.",
    url: "https://camstreamer.com/",
  },
];

const projects: TProject[] = [
  {
    name: "Pochopím to",
    description: `My first app that allows teachers to get instant feedback from students.
    Won multiple awards.
    Designed by [Tom](http://www.tomvrbovsky.com/) and business things managed by [Andrew](https://www.gonzor.cz/).
    `,
    tags: ["Web app", "React", "Backend", "Django"],
    finished: true,
    year: 2019,
    url: "https://www.facebook.com/pochopim.to/",
    sourceUrl: "https://gitlab.com/pochopimto/pcht",
  },
  {
    name: "Snailer.eu",
    description:
      "App that allows you to visualize and compare multiple gpx files.",
    tags: ["Web app", "React"],
    finished: true,
    year: 2020,
    url: "https://snailer.eu",
    sourceUrl: "https://github.com/JanKaifer/bike-tracker",
  },
  {
    name: "Estaj.cz",
    description:
      "PWA app for stables. Helps owners and stable workers to better communicate changes in horse diet etc.",
    tags: ["Backend", "Web app", "React", "Firebase"],
    finished: true,
    year: 2020,
    url: "https://estaj.cz",
  },
  {
    name: "My website v1",
    description:
      "My first personal website, built with Svelte. Svelte is cool.",
    tags: ["Web app", "Svelte"],
    finished: true,
    year: 2020,
    url: "https://v1.web.kaifer.cz/",
  },
  {
    name: "This web",
    description:
      "This web I built with next.js. Most of the content is written in config files or markdown and Next.js statically renders everything. It's like Jekyll, but with all superpowers of react.",
    tags: ["Web app", "React"],
    finished: true,
    year: 2021,
    active: true,
    url: "https://v2.web.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/personal-web/",
  },
  {
    name: "Alley tester",
    description:
      "React + Django app that my mum uses to generate tests for her students. It creates unique questions for each student based on defined rules / custom JS code.",
    tags: ["Web app", "React", "Backend", "Django"],
    finished: true,
    year: 2021,
    url: "https://alley-tester.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/alley-tester",
  },
  {
    name: "Runtime for Mindustry logic language",
    description:
      "Simple runtime & editor written in Typescript, helpful for debugging simple Mindustry programs.",
    tags: ["Web app", "React"],
    finished: true,
    year: 2021,
    url: "https://mlogsim.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/mlog-simulator/",
  },
  {
    name: "Learn Rust",
    description:
      "Would like to create something in Rust because Rust is awesome.",
    tags: ["Rust", "Skill"],
    finished: false,
    year: 2021,
  },
  {
    name: "Learn Go",
    description: "Go rocks.",
    tags: ["Go", "Skill"],
    finished: false,
    year: 2021,
  },
  {
    name: "Code Factory [WIP]",
    description: `Factorio-base programming language. I thought I would be cool to have visual language that is inspired by factorio, so I'm making one.`,
    url: "https://code-factory.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/code-factory",
    tags: ["Web app", "React"],
    finished: false,
    active: true,
    year: 2021,
  },
  {
    name: "Netrex mobile app",
    description:
      "Mobile app for [Netrex](https://www.netrex.cz/en/) in React Native. Android & iOS app that can live stream video from IP cameras. We had to create our custom video player and protocol to achieve the best possible performance.",
    year: 2021,
    finished: true,
    active: true,
    tags: ["Mobile app", "React Native"],
    url: "https://play.google.com/store/apps/details?id=cz.netrex.netrexmobile",
    company: "Netrex",
  },
  {
    name: "Learn TDD",
    description: "Trying to get into Test Driven Development.",
    finished: false,
    tags: ["Skill"],
    year: 2021,
  },
  {
    name: "T-shirt",
    description: "Simple, fast and reliable MPD client.",
    finished: true,
    sourceUrl: "https://gitlab.com/JanKaifer/tshirt",
    tags: ["React", "Web app"],
    year: 2021,
  },
];

const companiesByName = transformArrayToObjectByField(companies, "name");

const config = {
  tabs,
  values,
  companies,
  companiesByName,
  companyNames,
  projects,
  tags,
  postBasePath: "pages/blog/post",
} as const;

export default config;
