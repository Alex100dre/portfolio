import { combineReducers } from 'redux'
import splashScreen from './splashScreen'
import easterEgg from './easterEgg'
import projects from './projects'

const appReducer = combineReducers({
  splashScreen,
  easterEgg,
  projects,
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
