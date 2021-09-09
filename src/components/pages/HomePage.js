import React from 'react';
import styled from 'styled-components';
import HeroSection from '../HeroSection';

const Container = styled.div`
  max-width: 1115px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

function HomePage() {
  return (
    <Container>
      <HeroSection />
    </Container>
  );
}

export default HomePage;
