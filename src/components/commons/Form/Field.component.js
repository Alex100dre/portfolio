import React from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled, LabelStyled,
} from './Form.style'

import { Textarea } from './Textarea.component'

export const Field = ({
  params, children, ...others
}) => {
  const {
    id, type, name, placeholder, value, validation, label,
  } = params
  const ChoosenField = (() => {
    switch (type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        return InputStyled
      case 'textarea':
        return Textarea
      default:
        return InputStyled
    }
  })()

  return (
    <div>
      {label && (
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
      )}
      <ChoosenField
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        validation={validation}
        {...others}
      >
        {children}
      </ChoosenField>
    </div>
  )
}

Field.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    type: PropTypes.string,
    validation: PropTypes.shape({
      isValid: PropTypes.bool,
      label: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

// Field.defaultProps = {
//   placeholder: null,
//   value: '',
//   label: null,
//   type: 'text',
// }
