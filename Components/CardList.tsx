import styled, { css } from "styled-components";

import Card from "Components/Card";

type Props = {
  cards: TCard[];
};

const CardList = ({ cards }: Props) => {
  const pinnedCards = cards.filter((card) => card.pinned);
  const notPinnedCards = cards.filter((card) => !card.pinned);
  const years = [...new Set(notPinnedCards.map((p) => getYearFromDate(p.date)))]
    .sort()
    .reverse();

  return (
    <div>
      {pinnedCards.length > 0 && (
        <>
          <CardGroup tag="Pinned" cards={pinnedCards} />
          <HrLine />
        </>
      )}
      {years.map((year) => (
        <CardGroup
          key={year}
          tag={String(year)}
          cards={notPinnedCards
            .filter((p) => getYearFromDate(p.date) === year)
            .sort((p1, p2) => (p1.title > p2.title ? 1 : -1))}
        />
      ))}
    </div>
  );
};

const CardGroup = ({ cards, tag }: { cards: TCard[]; tag: string }) => (
  <CardGroupWrapper>
    <CardGroupTagWrapper>
      <div className="tag">{tag}</div>
    </CardGroupTagWrapper>
    <CardGroupCardsWrapper>
      {cards.map((cards) => (
        <Card key={cards.title} card={cards} />
      ))}
    </CardGroupCardsWrapper>
  </CardGroupWrapper>
);

const HrLine = styled.hr`
  ${({ theme }) => css`
    border-top: none;
    border-bottom: solid 1px ${theme.colors.backgroundContrast};
    margin: ${theme.spacing(6)}px ${theme.spacing(2)}px;
  `}
`;

const CardGroupWrapper = styled.div`
  display: flex;

  ${({ theme }) => css`
    margin-top: ${theme.spacing(4)}px;

    ${theme.breakpoints.onBreakpoint(
      "sm",
      css`
        flex-direction: column;
      `,
      css`
        flex-direction: row;
      `
    )}
  `}
`;

const CardGroupTagWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    & > .tag {
      color: ${theme.colors.secondaryText};
      margin: 0 ${theme.spacing(2)}px;
      margin-bottom: ${theme.spacing(4)}px;

      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.secondaryText};
      border-left: none;
      border-right: none;
    }
  `}
`;
const CardGroupCardsWrapper = styled.div``;

const getYearFromDate = (date: string) => Number(date.split("/").reverse()[0]);

export default CardList;
