import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const HeadlineContainer = styled.div`
  /* min-width: 589px;
  width: 100%; */
  min-height: 46px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

export const SubHeadlineContainer = styled.div`
  /* min-width: 576px;
  width: 100%; */
  min-height: 20px;
  display: flex;
  justify-content: center;
`;

export const Headline = styled.span`
  font-size: 38px;
  font-family: ${(props) => props.theme.font.family.headline};
  color: ${(props) => props.theme.color.headline};
  line-height: 45.6px;
`;

export const SubHeadline = styled.span`
  color: ${(props) => props.theme.color.subHeadline};
  line-height: 19.5px;
`;
