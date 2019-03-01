import React from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled,
  TextareaStyled,
} from './Form.style'

export const Textarea = ({
  name, placeholder, children, ...others
}) => (
  <TextareaStyled name={name} placeholder={placeholder} {...others}>{ children }</TextareaStyled>
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Textarea.defaultProps = {
  placeholder: null,
  children: null,
}
