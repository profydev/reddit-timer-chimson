import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.text};
  line-height: ${(props) => props.theme.font.lineHeight.medium};
`;

export const Container = styled.header`
  min-height: 100px;
  display: flex;
  margin: 0 80px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 261px;
`;
