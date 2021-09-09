import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  margin-bottom: 133px;
`;

export const Headline = styled.span`
  font-size: ${(props) => props.theme.font.size.bigger};
  font-family: ${(props) => props.theme.font.family.headline};
  color: ${(props) => props.theme.color.headline};
  line-height: ${(props) => props.theme.font.lineHeight.biggest};
  min-height: 46px;
  margin-bottom: 20px;
`;

export const SubHeadline = styled.span`
  color: ${(props) => props.theme.color.subHeadline};
  line-height: ${(props) => props.theme.font.lineHeight.medium};
  min-height: 20px;
  margin-bottom: 45px;
`;

export const SubHeadlineTwo = styled(SubHeadline)`
  margin-bottom: 36px;
  margin-top: 46px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.button.background.primary};
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: ${(props) => props.theme.font.size.small};
  line-height: ${(props) => props.theme.font.lineHeight.small};
  border-radius: ${(props) => props.theme.button.borderRadius.small};
  min-height: 36px;
  border: 0;
  text-align: center;
  min-width: 217px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
