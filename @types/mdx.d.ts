/// <reference types="@mdx-js/loader" />

declare module "@mdx-js/react" {
  export const MDXProvider: any;
}

declare module "*.mdx" {
  export const meta: TMeta;
  const Component: () => JSX.Element;
  export default Component;
}
