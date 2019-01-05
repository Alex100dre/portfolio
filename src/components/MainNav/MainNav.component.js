import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Container } from 'react-grid-system'

import routes from '../../constants/routes'
import {
  Nav, NavContent, LinksContainer, NavLink, LogoContainer,
} from './MainNav.style'


export default class MainNav extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Container lg>
            <NavContent>
              <LogoContainer>
                <Link to={routes.home}>Logo</Link>
              </LogoContainer>

              <LinksContainer>
                <NavLink to="#about">À propos</NavLink>
                <NavLink to="#about">Projets</NavLink>
                <NavLink to="#about">Contact</NavLink>
              </LinksContainer>
            </NavContent>
          </Container>
        </Nav>
      </div>
    )
  }
}

// MainNav.propTypes = {
//   types: PropTypes.arrayOf(PropTypes.string),
//   onClick: PropTypes.func,
// };
//
// MainNav.defaultProps = {
//   types: ['primary'],
//   onClick: () => {console.warn('You need to provide an onClick function to this button')},
// };
