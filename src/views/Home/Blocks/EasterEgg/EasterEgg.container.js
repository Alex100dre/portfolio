import { connect } from 'react-redux'

import EasterEgg from './EasterEgg.component'

const mapStateToProps = state => ({
  active: state.easterEggActive,
})

// const mapDispatchToProps = dispatch => ({
//   reviewActions: {
//     fetchCollaborator: igg => dispatch(fetchCollaborator(igg)),
//     clear: () => dispatch(clear()),
//   },
// })

export default connect(mapStateToProps)(
  // injectIntl(EasterEgg),
  EasterEgg,
)
