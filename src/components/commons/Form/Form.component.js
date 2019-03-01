import React from 'react'
import PropTypes from 'prop-types'
import {
  FormStyled,
} from './Form.style'

export const Form = ({ children, ...others }) => (
  <FormStyled {...others}>{ children }</FormStyled>
)

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Form.defaultProps = {
  children: null,
}
