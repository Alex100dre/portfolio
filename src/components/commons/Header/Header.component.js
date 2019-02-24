import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  HeaderStyled,
} from './Header.style'

export default class Header extends Component {
  render() {
    const { bgImage, bgColor, blur } = this.props
    return (
      <HeaderStyled bgImage={bgImage} bgColor={bgColor} blur={blur} />
    )
  }
}

Header.propTypes = {
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  blur: PropTypes.bool,
}

Header.defaultProps = {
  bgImage: null,
  bgColor: '#ff0050',
  blur: false,
}
