import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

import values from "Configs/values";
import { getGravatarSrc } from "Utils/misc";

type Props = {
  size: number;
  round?: boolean;
  css?: string;
};

const MyAvatar = ({ size, round = false, css = "" }: Props) => (
  <StyledImage
    $round={round}
    $css={css}
    src={getGravatarSrc({ email: values.email, size: size * 2 })}
    width={size}
    height={size}
  />
);

const StyledImage = styled(Image)<{ $round: boolean; $css: string }>`
  ${({ $round, $css }) => css`
    border-radius: ${$round ? "100%" : "none"};
    ${$css};
  `}
`;

export default MyAvatar;
