import { transformArrayToObjectByField } from "Utils/misc";

export const tags = [
  "React",
  "React Native",
  "Svelte",
  "Mobile app",
  "Web app",
  "Full Stack",
  "Django",
] as const;
export const companyNames = ["Netrex", "Camstreamer", "Retino"] as const;

export type TTag = typeof tags[number];
export type TCompanyName = typeof companyNames[number];

export type TProject = {
  name: string;
  description: string;
  tags: TTag[];
  finished: boolean;
  year?: number;
  url?: string;
  sourceUrl?: string;
  company?: TCompanyName;
};

export type TCompany = {
  name: TCompanyName;
  description: string;
  url: string;
};

export const companies: TCompany[] = [
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

export const projects: TProject[] = [
  {
    name: "Pochopím to",
    description: `Simple web app that allows teachers to get instant feedback from students.
    Won multiple awards.
    Created with my friends [Tom](http://www.tomvrbovsky.com/) and [Andrew](https://www.gonzor.cz/).
    `,
    tags: ["Web app", "React"],
    finished: true,
    year: 2019,
    url: "https://pochopimto.cz",
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
    tags: ["Web app", "React"],
    finished: true,
    year: 2020,
    url: "https://estaj.cz",
  },
  {
    name: "My website v1",
    description: "My first website, built with Svelte. Svelte is cool.",
    tags: ["Web app", "Svelte"],
    finished: true,
    year: 2020,
    url: "https://v1.web.kaifer.cz/",
  },
  {
    name: "This web",
    description: "This web I built on next.js",
    tags: ["Web app", "React"],
    finished: true,
    year: 2021,
    url: "https://v2.web.kaifer.cz/",
    sourceUrl: "https://gitlab.com/JanKaifer/personal-web/",
  },
  {
    name: "Alley tester",
    description:
      "React + Django app that my mum uses to generate tests for her students. It creates unique questions for each student based on defined rules / custom JS code.",
    tags: ["Web app", "React", "Full Stack", "Django"],
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
    name: "Compiler for Mindustry logic",
    description: "Transpiler from higher language to Mindustry logic.",
    tags: [],
    finished: false,
  },
  {
    name: "Learn Rust",
    description:
      "Would like to create something in Rust because Rust is awesome.",
    tags: [],
    finished: false,
  },
  {
    name: "Learn Go",
    description: "Go rocks.",
    tags: [],
    finished: false,
  },
  {
    name: "Factorio like graphical programming language",
    description:
      "I think that Factorio like factory can be used to create simple functional programs.",
    tags: [],
    finished: false,
  },
];

export const companiesByName = transformArrayToObjectByField(companies, "name");
