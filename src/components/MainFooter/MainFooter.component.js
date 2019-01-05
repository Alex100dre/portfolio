import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Container } from 'react-grid-system'

import routes from '../../constants/routes'
import { Footer, PreFooter, SubFooter } from './MainFooter.style'


export default class MainFooter extends Component {
  render() {
    return (
      <div>
        <Footer>
          <PreFooter>
            <Container>
              Alexandre Hachim || le-dev.com &copy;
            </Container>
          </PreFooter>
          <SubFooter>
            <Container>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur ducimus, ea eligendi expedita fuga impedit necessitatibus nemo officia perspiciatis porro praesentium quidem quis repellendus sequi, sint sit veritatis voluptates?
            </Container>
          </SubFooter>
        </Footer>
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
