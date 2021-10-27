import React from 'react'
import PropTypes from 'prop-types'
import {
  Chp, Icon
} from './Chip.style'

const Chip = (({ icon, label }) => (
  <Chp>
    {icon && (
      <Icon source={icon} />
    )}

    <span>{label}</span>
  </Chp>
))

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
}

Chip.defaultProps = {
  children: null,
}

export default Chip;