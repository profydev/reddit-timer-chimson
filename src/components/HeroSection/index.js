import React from 'react';
import * as S from './HeroSection.styles';

function HeroSection() {
  return (
    <S.Container>
      <S.HeadlineContainer>
        <S.Headline>No reactions to your reddit posts?</S.Headline>
      </S.HeadlineContainer>
      <S.SubHeadlineContainer>
        <S.SubHeadline>
          Great timing, great results! Find the best time to post on your
          subreddit.
        </S.SubHeadline>
      </S.SubHeadlineContainer>
    </S.Container>
  );
}

export default HeroSection;
