import React from 'react'
import PropTypes from 'prop-types'
import { Btn, BtnLink } from './Button.style'

const Button = ({
  types, onClick, href, children, ...others
}) => {
  const classes = types.join(' ')

  if (href) {
    return (
      <BtnLink href={href} className={classes} {...others}>
        {children}
      </BtnLink>
    )
  }

  return (
    <Btn onClick={onClick} className={classes} {...others}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node,
}

Button.defaultProps = {
  types: ['primary'],
  href: null,
  children: null,
  onClick: () => { console.warn('You need to provide an onClick function to this button') },
}

export default Button
