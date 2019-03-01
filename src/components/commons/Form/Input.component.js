import React from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled, LabelStyled,
} from './Form.style'

export const Input = ({
  name, placeholder, value, label, type, ...others
}) => (
  <div>
    {label && (
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
    )}
    <InputStyled type={type} name={name} placeholder={placeholder} value={value} {...others} />
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  placeholder: null,
  value: null,
  label: null,
  type: 'text',
}
