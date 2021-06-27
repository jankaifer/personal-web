import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import styled, { css } from "styled-components";

type Props = {
  children: string;
  className?: string;
};

const CodeBlock = ({ children, className = "language-typescript" }: Props) => {
  const language = className.replace(/language-/, "") as Language;
  const trimmedChildren = children.trim();

  return (
    <Highlight
      {...defaultProps}
      code={trimmedChildren}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <Token key={key} {...getTokenProps({ token, key })} />
              ))}
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

const Pre = styled.pre`
  text-align: left;
  ${({ theme }) => css`
    padding: ${theme.spacing(1)}px;
  `}
`;
const Line = styled.div``;
const Token = styled.span``;

export default CodeBlock;
