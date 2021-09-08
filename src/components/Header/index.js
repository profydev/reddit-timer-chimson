import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import * as Styles from './styles';

function Header() {
  return (
    <Styles.Header>
      <Link href="/" to="/" style={{ display: 'inline-flex' }}>
        <Logo width={150} height={36} />
      </Link>
      <Styles.LinksContainer>
        <Styles.StyledLink href="/search" to="/search/javascript">
          Search
        </Styles.StyledLink>
        <Styles.StyledLink href="#how-it-works" to="#how-it-works">
          How it works
        </Styles.StyledLink>
        <Styles.StyledLink href="#about" to="#about">
          About
        </Styles.StyledLink>
      </Styles.LinksContainer>
    </Styles.Header>
  );
}

export default Header;
