import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

import config from "Config";
import { getGravatarSrc } from "Utils/misc";

type Props = {
  size: number;
  round?: boolean;
  css?: string;
} & Partial<React.ComponentProps<typeof Image>>;

const MyAvatar = ({ size, round = false, css = "", ...rest }: Props) => (
  <StyledImage
    $round={round}
    $css={css}
    alt={`${config.values.name.toLowerCase().replace(" ", "-")}-avatar`}
    src={getGravatarSrc({ email: config.values.email, size: size * 2 })}
    width={size}
    height={size}
    {...rest}
  />
);

const StyledImage = styled(Image)<{ $round: boolean; $css: string }>`
  ${({ $round, $css }) => css`
    border-radius: ${$round ? "100%" : "none"};
    background-color: white;
    ${$css};
  `}
`;

export default MyAvatar;
