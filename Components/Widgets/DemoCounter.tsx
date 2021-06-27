import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const DemoCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const pid = setInterval(() => setCounter((v) => v + 1), 1000);
    return () => clearInterval(pid);
  }, []);

  return <StyledSpan>{counter}</StyledSpan>;
};

const StyledSpan = styled.span`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondaryText};
    min-width: 50px;
    display: inline-block;
    text-align: center;
  `};
`;

export default DemoCounter;
