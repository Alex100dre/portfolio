import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container } from 'react-grid-system'

import routes from '../../constants/routes'
import { Footer, PreFooter, SubFooter } from './MainFooter.style'
import Button from '../commons/Button/Button.component'


export default class MainFooter extends Component {
  eEggClick = () => {
    this.props.enableEasterEgg()
  }

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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur ducimus, ea eligendi expedita fuga impedit necessitatibus nemo officia perspiciatis porro praesentium quidem quis repellendus sequi, sint sit veritatis voluptates?</p>
              <Button types={['primary', 'shadow']} onClick={this.eEggClick}>
                <span role="img" aria-label="emoji chut">🤫</span>Ne clique pas<span role="img" aria-label="emoji mensonge">&nbsp;🤥</span>
              </Button>
            </Container>
          </SubFooter>
        </Footer>
      </div>
    )
  }
}

MainFooter.propTypes = {
  enableEasterEgg: PropTypes.func.isRequired,
}
