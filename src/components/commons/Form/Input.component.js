import React from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled, LabelStyled,
} from './Form.style'

export const Input = ({
  field, ...others
}) => (
  <div>
    {field.label && (
      <LabelStyled htmlFor={field.name}>{field.label}</LabelStyled>
    )}
    <InputStyled
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      value={field.value}
      validation={field.validation}
      {...others}
    />
  </div>
)

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    type: PropTypes.string,
  }).isRequired,
}

// Input.defaultProps = {
//   placeholder: null,
//   value: '',
//   label: null,
//   type: 'text',
// }
