import React from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled,
  TextareaStyled,
} from './Form.style'

export const Textarea = ({
  id, name, placeholder, children, validation, ...others
}) => (
  <TextareaStyled id={id} name={name} placeholder={placeholder} validation={validation} {...others}>{ children }</TextareaStyled>
)

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  validation: PropTypes.shape({
    isValid: PropTypes.bool,
    label: PropTypes.string,
  }),
}

Textarea.defaultProps = {
  id: null,
  placeholder: null,
  children: null,
  validation: null,
}
