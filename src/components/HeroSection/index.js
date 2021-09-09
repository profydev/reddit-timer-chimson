import React from 'react';
import { Link } from 'react-router-dom';
import DEFAULT_SUBREDDIT from '../../shared';
import heatmap from './heatmap.png';
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
        <S.Button as={Link} to={`/search/${DEFAULT_SUBREDDIT}`}>
          SHOW ME THE BEST TIME
        </S.Button>
        <S.SubHeadlineTwo>
          r/
          {DEFAULT_SUBREDDIT}
        </S.SubHeadlineTwo>
        <Link to={`/search/${DEFAULT_SUBREDDIT}`}>
          <img src={heatmap} alt="Heatmap" style={{ maxWidth: '100%' }} />
        </Link>
      </S.Wrapper>
    </S.Container>
  );
}

export default HeroSection;
