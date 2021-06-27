import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import Markdown from "./Markdown";

type Props = {
  card: TCard;
};

const Card = ({
  card: { title, date, tags, url, sourceUrl, markdownDescription },
}: Props) => (
  <Container>
    <Header>
      {url !== undefined ? (
        <Link href={url}>
          <a href={url}>{title}</a>
        </Link>
      ) : (
        title
      )}
    </Header>
    {sourceUrl !== undefined && (
      <Link href={sourceUrl}>
        <a className="source-code" href={sourceUrl}>
          [Source code]
        </a>
      </Link>
    )}
    {date !== undefined && <DateWrapper>{date}</DateWrapper>}
    {tags !== undefined && (
      <TagsWrapper>
        {tags.map((tag) => (
          <ProjectTag>{tag}</ProjectTag>
        ))}
      </TagsWrapper>
    )}
    {markdownDescription !== undefined && (
      <Markdown>{markdownDescription}</Markdown>
    )}
  </Container>
);

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DateWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacing(2)}px;
    color: ${theme.colors.secondaryText};
    font-size: ${theme.sizes.small};
  `}
`;

const ProjectTag = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(1)}px;
    margin-top: ${theme.spacing(1)}px;
    color: ${theme.colors.secondaryText};
    font-size: ${theme.sizes.small};
    border-right: 1px solid ${theme.colors.secondaryText};

    &:last-child {
      border-right: 0;
    }
  `}
`;

const Container = styled.div`
  &:first-child {
    margin-top: 0;
  }

  ${({ theme }) => css`
    margin-top: ${theme.spacing(3)}px;
    margin-left: ${theme.spacing(1)}px;

    p {
      margin: ${theme.spacing(1)}px;
    }
  `};
`;

const Header = styled.h3`
  margin: 0;

  ${({ theme }) => css`
    & > .source-code {
      margin-left: ${theme.spacing(2)}px;
    }
  `}
`;

export default Card;
