import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Container } from 'react-grid-system'

import routes from '../../constants/routes'
import {
  Nav, NavContent, LinksContainer, LogoContainer,
} from './MainNav.style'
import MainLogo from '../MainLogo'

export default class MainNav extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Container lg>
            <NavContent>
              <LogoContainer>
                <Link to={routes.home}>
                  <MainLogo width="25px" height="25px" />
                </Link>
              </LogoContainer>

              <LinksContainer>
                <a href="/#about">À propos</a>
                <a href="/#projects">Projets</a>
                <a href="/#contact">Contact</a>
                <a href="https://cv.le-dev.com" target="_blank" rel="noopener noreferrer">CV</a>
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
