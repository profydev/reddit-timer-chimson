import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Styles from '../Header/styles';
import Logo from './Logo';

const StyledFooter = styled.div`
  display: flex;
  min-height: 100px;
  margin: 0 250px;
  justify-content: space-between;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Styles.StyledLink
        fontSize={14}
        lineHeight={17.07}
        href="https://profy.dev/employers"
        to={{
          pathname: 'https://profy.dev/employers',
        }}
        target="_blank"
      >
        profy.dev
      </Styles.StyledLink>
      <Link href="/" to="/" style={{ display: 'inline-flex' }}>
        <Logo width={36} />
      </Link>
      <Styles.StyledLink
        href="/terms"
        to="/terms"
        fontSize={14}
        lineHeight={17.07}
      >
        Terms & Privacy
      </Styles.StyledLink>
    </StyledFooter>
  );
}

export default Footer;
