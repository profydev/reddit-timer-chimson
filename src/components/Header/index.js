import React from 'react';
import { Link } from 'react-router-dom';
import DEFAULT_SUBREDDIT from '../../shared';
import * as Styles from './Header.style';
import { ReactComponent as Logo } from './logo.svg';

function Header() {
  return (
    <Styles.Container>
      <Link href="/" to="/" style={{ display: 'inline-flex' }}>
        <Logo width={150} height={36} />
      </Link>
      <Styles.LinkWrapper>
        <Styles.StyledLink href="/search" to={`/search/${DEFAULT_SUBREDDIT}`}>
          Search
        </Styles.StyledLink>
        <Styles.StyledLink href="#how-it-works" as="a">
          How it works
        </Styles.StyledLink>
        <Styles.StyledLink href="#about" as="a">
          About
        </Styles.StyledLink>
      </Styles.LinkWrapper>
    </Styles.Container>
  );
}

export default Header;
