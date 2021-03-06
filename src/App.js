import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as firebase from 'firebase'
import { configureAnchors } from 'react-scrollable-anchor'

// import logo from './logo.svg';
// import './App.css';
import routes from './constants/routes'
import Home from './views/Home'
import Project from './views/Project'
import MainNav from './components/MainNav'
import config from './config'
import { MainContent } from './App.style'
import MessagePanel from './components/commons/MessagePanel'


class App extends Component {
  constructor() {
    super()

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }

  componentDidMount() {
    configureAnchors({ offset: -130 })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav />
          <MainContent>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.project} component={Project} />

            <MessagePanel isOpen>
              ⚠ Site en construction.
            </MessagePanel>
          </MainContent>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
