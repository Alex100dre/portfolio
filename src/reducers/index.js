// import { combineReducers } from 'redux'

// const appReducer = combineReducers

const initialState = {
  easterEggActive: false,
}

// const rootReducer = (state = initialState, action) => state

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EASTER_EGG_ENABLE':
      return {
        ...state,
        easterEggActive: true,
      }
    case 'EASTER_EGG_DISABLE':
      return {
        ...state,
        easterEggActive: false,
      }
  }
  return state
}

export default rootReducer
