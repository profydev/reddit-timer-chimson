import React from 'react';
import styled from 'styled-components';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';

const Container = styled.div`
  max-width: 1115px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function HomePage() {
  return (
    <Container>
      <HeroSection />
      <InfoSection />
    </Container>
  );
}

export default HomePage;
