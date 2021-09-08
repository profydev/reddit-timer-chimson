import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
      <div>yo</div>
      <Link href="/" to="/" style={{ display: 'inline-flex' }}>
        <Logo width={36} />
      </Link>
      <div>yo</div>
    </StyledFooter>
  );
}

export default Footer;
