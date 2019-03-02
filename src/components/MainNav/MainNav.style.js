import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
  right: 0;
  background-color: #000;
  & a {
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  padding: 10px;
`

export const LinksContainer = styled.div`
  display: flex;
  
  & a {
    padding: 10px;
  } 
`
