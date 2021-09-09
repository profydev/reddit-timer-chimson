import styled from 'styled-components';
import heatmap from './heatmap.png';

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
  font-size: 36px;
  font-family: ${(props) => props.theme.font.family.headline};
  color: ${(props) => props.theme.color.headline};
  line-height: 45.6px;
  min-height: 46px;
  margin-bottom: 20px;
`;

export const SubHeadline = styled.span`
  color: ${(props) => props.theme.color.subHeadline};
  line-height: 19.5px;
  min-height: 20px;
  margin-bottom: 45px;
`;

export const SubHeadlineTwo = styled(SubHeadline)`
  margin-bottom: 36px;
  margin-top: 46px;
`;

export const Button = styled.button`
  background-color: #fdb755;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 9px;
  border-radius: 4px;
  min-height: 36px;
  border: 0;
  min-width: 217px;
  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.div`
  min-width: 1114px;
  min-height: 332px;
  background-image: url(${heatmap});
`;
