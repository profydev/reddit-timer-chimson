import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: 'Montserrat';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: ${(props) => props.theme.color.text};
  line-height: 19.5px;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: 'Montserrat';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: ${(props) => props.theme.color.text};
  line-height: 19.5px;
`;

const StyledHeader = styled.header`
  min-height: 100px;
  display: flex;
  margin: 0 80px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`;

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 261px;
`;

const Icon = styled.svg`
  width: 150px;
  height: 36px;
`;

export default {
  StyledLink,
  StyledHeader,
  StyledLinksContainer,
  A,
  Icon,
};
