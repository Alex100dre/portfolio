import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
  
  & a {
    //color: #a7afc7;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  padding: 10px;
`;

export const NavLink = styled(Link)``;

export const LinksContainer = styled.div`
  display: flex;
  
  ${NavLink} {
    padding: 10px;
  } 
`;