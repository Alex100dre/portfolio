import { combineReducers } from 'redux'
import splashScreen from './splashScreen'
import easterEgg from './easterEgg'

const appReducer = combineReducers({
  splashScreen,
  easterEgg,
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
