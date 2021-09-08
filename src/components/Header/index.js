import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './Header.style';
import { ReactComponent as Logo } from './logo.svg';

function Header() {
  return (
    <Styles.Container>
      <Link href="/" to="/" style={{ display: 'inline-flex' }}>
        <Logo width={150} height={36} />
      </Link>
      <Styles.LinkWrapper>
        <Styles.StyledLink href="/search" to="/search/javascript">
          Search
        </Styles.StyledLink>
        <Styles.StyledLink href="#how-it-works" to="#how-it-works">
          How it works
        </Styles.StyledLink>
        <Styles.StyledLink href="#about" to="#about">
          About
        </Styles.StyledLink>
      </Styles.LinkWrapper>
    </Styles.Container>
  );
}

export default Header;
