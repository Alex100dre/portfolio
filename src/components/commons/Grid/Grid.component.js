import React from 'react'
import PropTypes from 'prop-types'
import { Grd } from './Grid.style'

const Grid = ({ cols, children }) => <Grd cols={cols}>{ children }</Grd>

export default Grid

Grid.propTypes = {
  cols: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Grid.defaultProps = {
  cols: {},
  children: null,
}
