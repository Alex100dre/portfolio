import React from 'react'
import PropTypes from 'prop-types'
import {
  FieldsetStyled,
} from './Form.style'

export const Fieldset = ({ children }) => (
  <FieldsetStyled>
    {children}
  </FieldsetStyled>
)

Fieldset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Fieldset.defaultProps = {
  children: null,
}
