import { connect } from 'react-redux'

import { enable } from '../../store/easterEgg'
import MainFooter from './MainFooter.component'

// const mapStateToProps = state => ({
//   active: state.easterEggActive,
// })

const mapDispatchToProps = dispatch => ({
  enableEasterEgg: () => {
    dispatch(enable())
  },
})

export default connect(null, mapDispatchToProps)(
  // injectIntl(EasterEgg),
  MainFooter,
)
