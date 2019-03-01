import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Container } from 'react-grid-system'
import MainHeader from '../../components/MainHeader'
// import Button from '../../components/commons/Button'
import Projects from './Blocks/Projects'
import About from './Blocks/About'
import MainFooter from '../../components/MainFooter'
import EasterEgg from './Blocks/EasterEgg'
import SplashScreen from '../SplashScreen'
import Contact from './Blocks/Contact/Contact.component'
// import Divider from '../../components/commons/Divider/Divider.component'

export default class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Container>
          <About />
          <Projects />
        </Container>
        <Contact />
        <EasterEgg />
        <MainFooter />
        <SplashScreen />
      </div>
    )
  }
}
