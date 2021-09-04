import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-grid-system'

import { Footer, PreFooter, SubFooter } from './MainFooter.style'

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
              <p className="easter" onClick={this.eEggClick}>"Si notre cerveau était suffisamment simple pour que nous le comprenions, nous serions si simples d'esprit que nous ne le comprendrions pas."<br />Lyall Watson</p>
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
