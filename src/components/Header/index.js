import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SectionLink from './SectionLink';
import Styles from './styles';

function Header() {
  return (
    <Styles.Header>
      <Link href="/" to="/" style={{ display: 'inline-flex' }}>
        <Logo width={150} />
      </Link>
      <Styles.LinksContainer>
        <Styles.StyledLink href="/search" to="/search/javascript">
          Search
        </Styles.StyledLink>
        <SectionLink href="#how-it-works">How it works</SectionLink>
        <SectionLink href="#about">About</SectionLink>
      </Styles.LinksContainer>
    </Styles.Header>
  );
}

export default Header;
