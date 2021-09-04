import { connect } from 'react-redux'

import EasterEgg from './EasterEgg.component'
import { disable } from '../../../../store/easterEgg'

const mapStateToProps = ({ easterEgg }) => ({
  active: easterEgg.active,
})

const mapDispatchToProps = dispatch => ({
  disable: () => {
    dispatch(disable())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(
  EasterEgg,
)
