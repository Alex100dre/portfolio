import { connect } from 'react-redux'

import MainFooter from './MainFooter.component'

// const mapStateToProps = state => ({
//   active: state.easterEggActive,
// })

const mapDispatchToProps = dispatch => ({
  enableEasterEgg: () => {
    dispatch({ type: 'EASTER_EGG_ENABLE' })
  },
})

export default connect(null, mapDispatchToProps)(
  // injectIntl(EasterEgg),
  MainFooter,
)
