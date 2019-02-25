import { connect } from 'react-redux'

import SplashScreen from './SplashScreen.component'

const mapStateToProps = state => ({
  alreadySeen: state.splashScreenSeen,
})

const mapDispatchToProps = dispatch => ({
  setSplashScreenSeen: () => {
    dispatch({ type: 'SPLASH_SCREEN_SEEN' })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(
  SplashScreen,
)
