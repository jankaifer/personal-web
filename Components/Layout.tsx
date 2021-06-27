import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";

import { tabs } from "Configs/paths";
import values from "Configs/values";

type Props = {
  children: React.ReactNode;
  meta: TMeta;
};

const Layout = ({ children, meta: { isHome = false, title } }: Props) => {
  return (
    <>
      <Head>
        <title>
          {values.name} - {title}
        </title>
      </Head>
      <RootDiv>
        <Header>
          <HeaderContent>
            <Link href="/">
              <Logo href="/">
                <LogoName>{values.name}</LogoName>
                <LogoRest>'s web</LogoRest>
              </Logo>
            </Link>
            <Nav>
              <NavList>
                {tabs.map(({ name, path }) => (
                  <NavItem key={path}>
                    <Link href={path}>
                      <NavLink href={path}>
                        <span>{name}</span>
                      </NavLink>
                    </Link>
                  </NavItem>
                ))}
              </NavList>
            </Nav>
          </HeaderContent>
        </Header>
        <SiteContent>
          <SiteContentContainer>{children}</SiteContentContainer>
        </SiteContent>
        <Footer>
          <FooterContent>
            {!isHome && (
              <Link href="/">
                <a href="/">&larr; Go back home</a>
              </Link>
            )}
          </FooterContent>
        </Footer>
      </RootDiv>
    </>
  );
};

const RootDiv = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  box-sizing: border-box;

  ${({ theme }) => css`
    max-width: ${theme.maxPageWidth}px;
    padding: 0 ${theme.spacing(1)}px;
    border-bottom: ${theme.colors.backgroundContrast} solid 1px;
  `}
`;

const Logo = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.sizes.logo};
    color: ${theme.colors.text};
    padding: ${theme.spacing(1)}px;
  `}
`;

const LogoName = styled.span``;

const LogoRest = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryText};
  `}
`;

const SiteContent = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(2)}px 0;
`;

const SiteContentContainer = styled.div`
  flex-grow: 1;
  box-sizing: border-box;

  ${({ theme }) => css`
    max-width: ${theme.maxPageWidth}px;
    padding: ${theme.spacing(2)}px;
  `}
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => css`
    max-width: ${theme.maxPageWidth}px;
    padding: ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(4)}px
      ${theme.spacing(1)}px;
  `}
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: flex;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacing(2)}px ${theme.spacing(1)}px;
  `}
`;

export default Layout;
