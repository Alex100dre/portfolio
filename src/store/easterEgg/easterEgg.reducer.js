import { easterEggTypes } from '.'

const initialState = {
  active: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case easterEggTypes.EASTER_EGG_ENABLE:
      return {
        ...state,
        active: true,
      }
    case easterEggTypes.EASTER_EGG_DISABLE:
      return {
        ...state,
        active: false,
      }
    default:
      return state
  }
}
