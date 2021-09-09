import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';

const Container = styled.footer`
  display: flex;
  min-height: 100px;
  margin: 0 250px;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.text};
  line-height: ${(props) => props.theme.font.lineHeight.default};
`;

function Footer() {
  return (
    <Container>
      <StyledLink href="https://profy.dev/employers" as="a">
        profy.dev
      </StyledLink>
      <Link
        href="/"
        to="/"
        style={{
          display: 'inline-flex',
          marginTop: '-3px',
          marginLeft: '45px',
        }}
      >
        <Logo width={36} height={36} />
      </Link>
      <StyledLink href="/terms" to="/terms">
        Terms & Privacy
      </StyledLink>
    </Container>
  );
}

export default Footer;
