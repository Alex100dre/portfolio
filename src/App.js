import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as firebase from 'firebase'

// import logo from './logo.svg';
// import './App.css';
import routes from './constants/routes'
import Home from './views/Home'
import Project from './views/Project'
import MainNav from './components/MainNav'
import config from './config'
import { MainContent } from './App.style'


class App extends Component {
  constructor() {
    super()

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav />
          <MainContent>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.project} component={Project} />
          </MainContent>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
