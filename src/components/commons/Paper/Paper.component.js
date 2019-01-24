import React from 'react'
import PropTypes from 'prop-types'
import { Ppr } from './Paper.style'

const Paper = ({ overlapTop, children }) => {
  const pprOverlapTop = overlapTop === true ? '-100px' : overlapTop
  return <Ppr overlapTop={pprOverlapTop}>{ children }</Ppr>
}

export default Paper

Paper.propTypes = {
  overlapTop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Paper.defaultProps = {
  children: null,
  overlapTop: false,
}
