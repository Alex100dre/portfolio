import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Btn } from './Button.style'

const Button = ({ types, onClick, children }) => {
  const classes = types.join(' ')
  return (
    <Btn onClick={onClick} className={classes}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  types: ['primary'],
  onClick: () => { console.warn('You need to provide an onClick function to this button') },
}

export default Button
