import { combineReducers } from 'redux'
import splashScreen from './splashScreen'

const initialState = {
  splashScreenSeen: false,
  easterEggActive: false,
}

const appReducer = combineReducers({
  splashScreen,
})

const rootReducer = (state = initialState, action) => appReducer(state, action)

export default rootReducer
