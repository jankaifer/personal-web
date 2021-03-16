import React from "react";
import ReactMarkdown from "react-markdown";

type ReactMarkdownProps = React.ComponentProps<typeof ReactMarkdown>;
type Props = Required<Pick<ReactMarkdownProps, "children">>;

const Markdown = ({ children, ...rest }: Props) => (
  <ReactMarkdown allowDangerousHtml children={children} {...rest} />
);

export default Markdown;
