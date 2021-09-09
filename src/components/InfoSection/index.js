import React from 'react';
import * as S from './InfoSection.styles';

function InfoSection() {
  return (
    <S.Container>
      <S.FirstSection id="how-it-works">
        <S.SectionHeader>How it works</S.SectionHeader>
        <S.SectionDetails>
          <S.Span>
            • We find the 500 top posts from the past year for a subreddit.
          </S.Span>
          <S.Span>
            • The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </S.Span>
          <S.Span>• See immediately when to submit your reddit post.</S.Span>
        </S.SectionDetails>
      </S.FirstSection>
      <S.SecondSection id="about">
        <S.SectionHeader>About</S.SectionHeader>
        <S.SectionDetails>
          <S.Span>
            This app was created during a course on
            {' '}
            <S.A href="https://profy.dev">profy.dev</S.A>
            {' '}
            with the goal to
            implement a pixel-perfect real-world application with professional
            workflows and tools like Kanban, Asana, Zeplin, GitHub, pull
            requests and code reviews.
            {' '}
            <S.A href="https://profy.dev/employers">
              Click here for more information.
            </S.A>
          </S.Span>
        </S.SectionDetails>
      </S.SecondSection>
    </S.Container>
  );
}

export default InfoSection;
