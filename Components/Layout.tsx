import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

import profile from "Assets/images/profile.jpg";
import values from "Configs/values";

const RootDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.maxPageWidth}px;
  flex-grow: 1;
  padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(2)}px`};

  border-bottom: ${({ theme }) => theme.colors.backgroundContrast} solid 1px;
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.sizes.logo};
`;

const LogoName = styled.span``;

const LogoRest = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryText};
  `}
`;

const SiteContent = styled.main`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const SiteContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.maxPageWidth}px;
    padding: ${theme.spacing(2)}px ${theme.spacing(1)}px;
  `}
`;

type Props = {
  children: React.ReactNode;
  home?: boolean;
};

const Layout = ({ children, home = false }: Props) => {
  return (
    <RootDiv>
      <Header>
        <HeaderContent>
          <Logo>
            <LogoName>{values.name}</LogoName>
            <LogoRest>'s web</LogoRest>
          </Logo>
        </HeaderContent>
      </Header>
      <SiteContent>
        <SiteContentContainer>{children}</SiteContentContainer>
      </SiteContent>
    </RootDiv>
  );
};

export default Layout;
