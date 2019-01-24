import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as firebase from 'firebase'

// import logo from './logo.svg';
// import './App.css';
import routes from './constants/routes'
import Home from './views/Home'
import MainHeaderNav from './components/MainNav'
import config from './config'


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
          <MainHeaderNav />
          <Route exact path={routes.home} component={Home} />

          {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* </p> */}
          {/* <a */}
          {/* className="App-link" */}
          {/* href="https://reactjs.org" */}
          {/* target="_blank" */}
          {/* rel="noopener noreferrer" */}
          {/* > */}
          {/* Learn React */}
          {/* </a> */}
          {/* </header> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
