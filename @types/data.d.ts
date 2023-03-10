declare type TMeta = {
  title: string;
  description: string;
  date: string;
  isHome?: boolean;
  layoutType?: "normal" | "blogPost";
};

declare type TTag = import("Config")._TTag;
declare type TCompanyName = typeof companyNames[number];

declare type TProject = {
  name: string;
  description: string;
  tags: TTag[];
  finished: boolean;
  year: number;
  active?: boolean;
  url?: string;
  sourceUrl?: string;
  company?: TCompanyName;
};

declare type TCompany = {
  name: TCompanyName;
  description: string;
  url: string;
};

declare type TPost = {
  tag: string;
  title: string;
  description: string;
  date: string;
};

declare type TCard = {
  title: string;
  date: string;
  pinned?: boolean;
  url?: string;
  sourceUrl?: string;
  markdownDescription?: string;
  tags?: string[];
};
