import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-grid-system'
import MainHeader from '../../components/MainHeader'
// import Button from '../../components/commons/Button'
import Projects from './Blocks/Projects'
import About from './Blocks/About'
import MainFooter from '../../components/MainFooter/MainFooter.component'
// import Divider from '../../components/commons/Divider/Divider.component'

export default class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Container>
          {/* <Section> */}
          {/* <p>Bienvenue sur la Home</p> */}
          {/* <Button types={['primary', 'shadow']} onClick={() => { alert('It rocks baby! 🤟😎') }}>Test de bouton 😎</Button> */}
          {/* </Section> */}

          <About />
          <Projects />

        </Container>
        <MainFooter />
      </div>
    )
  }
}
