/// <reference types="@mdx-js/loader" />

declare module "@next/mdx" {
  export const MDXProvider: (props: {
    children: React.ReactNode;
    components: Record<string, (props: any) => JSX.Element>;
  }) => JSX.Element;
}
