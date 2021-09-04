import { connect } from 'react-redux'
import { setStatus } from '../../store/splashScreen'
import SplashScreen from './SplashScreen.component'

const mapStateToProps = ({ splashScreen }) => ({
  status: splashScreen.status,
})

const mapDispatchToProps = dispatch => ({
  setStatus: (status) => {
    dispatch(setStatus(status))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(
  SplashScreen,
)
