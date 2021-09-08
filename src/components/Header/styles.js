import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-style: normal;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
  color: ${(props) => props.theme.color.text};
  line-height: ${(props) => (props.lineheight ? props.lineheight : 19.5)}px;
`;

const Header = styled.header`
  min-height: 100px;
  display: flex;
  margin: 0 80px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 261px;
`;

export default {
  StyledLink,
  Header,
  LinksContainer,
};
