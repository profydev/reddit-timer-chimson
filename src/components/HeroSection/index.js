import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeroSection.styles';

function HeroSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Headline>No reactions to your reddit posts?</S.Headline>
        <S.SubHeadline>
          Great timing, great results! Find the best time to post on your
          subreddit.
        </S.SubHeadline>
        <Link to="/search/javascript">
          <S.Button>SHOW ME THE BEST TIME</S.Button>
        </Link>
        <S.SubHeadlineTwo>r/javascript</S.SubHeadlineTwo>
        <Link to="/search/javascript">
          <S.Image />
        </Link>
      </S.Wrapper>
    </S.Container>
  );
}

export default HeroSection;
