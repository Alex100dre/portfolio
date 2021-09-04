import { STATUS } from '../../views/SplashScreen/SplashScreen.contants'

const initialState = {
  status: STATUS.TO_DISPLAY,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SPLASH_SCREEN_STATUS':
      return {
        ...state,
        status: action.payload,
      }
    default:
      return state
  }
}
