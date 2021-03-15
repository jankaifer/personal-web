import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({ ...rest }: React.ComponentProps<typeof ReactMarkdown>) => (
  <ReactMarkdown {...rest} />
);

export default Markdown;
