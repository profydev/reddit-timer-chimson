import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  margin-bottom: 99px;
  min-width: 738px;
  min-height: 350px;
`;

const FirstSection = styled.section`
  min-width: 738px;
  min-height: 122px;
  margin-bottom: 105px;
`;

const SecondSection = styled(FirstSection)`
  margin-bottom: 0;
  display: block;
`;

const SectionLink = styled(Link)`
  text-decoration: none;
  font-family: ${(props) => props.theme.font.family.headline};
  font-size: 24px;
  line-height: 28.8px;
  color: ${(props) => props.theme.color.headline};
`;

const Li = styled.li`
  color: ${(props) => props.theme.color.subHeadline};
  line-height: 27px;
`;

const AboutText = styled.span`
  line-height: 27px;
  min-width: 738px;
  word-break: break-word;
  color: ${(props) => props.theme.color.subHeadline};
`;

function InfoSection() {
  return (
    <Container>
      <FirstSection>
        <SectionLink href="https://profy.dev/employers" as="a">
          How it works
        </SectionLink>
        <div style={{ marginTop: '12px' }}>
          <Li>We find the 500 top posts from the past year for a subreddit.</Li>
          <Li>
            The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </Li>
          <Li>See immediately when to submit your reddit post.</Li>
        </div>
      </FirstSection>
      <SecondSection>
        <SectionLink href="https://profy.dev" as="a">
          About
        </SectionLink>
        <div style={{ maxWidth: '738px', marginTop: '12px' }}>
          <AboutText>
            This app was created during a course on profy.dev with the goal to
            implement a pixel-perfect real-world application with professional
            workflows and tools like Kanban, Asana, Zeplin, GitHub, pull
            requests and code reviews. Click here for more information.
          </AboutText>
        </div>
      </SecondSection>
    </Container>
  );
}

export default InfoSection;
