import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  margin-bottom: 99px;
  min-width: 738px;
  min-height: 350px;
`;

export const FirstSection = styled.section`
  min-width: 738px;
  min-height: 122px;
  margin-bottom: 105px;
`;

export const SecondSection = styled(FirstSection)`
  margin-bottom: 0;
  display: block;
`;

export const SectionHeader = styled.span`
  font-family: ${(props) => props.theme.font.family.headline};
  font-size: 23px;
  line-height: 28.8px;
  color: ${(props) => props.theme.color.headline};
`;

export const SectionDetails = styled.div`
  margin-top: 12px;
  max-width: 738px;
`;

export const A = styled.a`
  text-decoration: none;
  color: #2196f3;
`;

export const Span = styled.span`
  line-height: 27px;
  display: block;
  min-width: 738px;
  text-align: left;
  color: ${(props) => props.theme.color.subHeadline};
`;