import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
`;

const HeadlineContainer = styled.div`
  /* min-width: 589px;
  width: 100%; */
  min-height: 46px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

const SubHeadlineContainer = styled.div`
  /* min-width: 576px;
  width: 100%; */
  min-height: 20px;
  display: flex;
  justify-content: center;
`;

const Headline = styled.span`
  font-size: 38px;
  font-family: ${(props) => props.theme.font.family.headline};
  color: ${(props) => props.theme.color.headline};
  line-height: 45.6px;
`;

const SubHeadline = styled.span`
  color: ${(props) => props.theme.color.subHeadline};
  line-height: 19.5px;
`;

function HeroSection() {
  return (
    <Container>
      <HeadlineContainer>
        <Headline>No reactions to your reddit posts?</Headline>
      </HeadlineContainer>
      <SubHeadlineContainer>
        <SubHeadline>
          Great timing, great results! Find the best time to post on your
          subreddit.
        </SubHeadline>
      </SubHeadlineContainer>
    </Container>
  );
}

export default HeroSection;

// Font
// Bitter
// Weight
// 400
// Style
// normal
// Size
// 38px
// Line height
// 45.6px
// Align
// Center

// Width
// 589px
// Height
// 46px
// Left
// 14px
// Blend
// Pass through
