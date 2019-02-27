import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  HeaderStyled,
  Background,
  Content,
} from './Header.style'
import Button from '../Button/Button.component'

export default class Header extends Component {
  render() {
    const {
      bgImage, bgColor, blur, children,
    } = this.props
    return (
      <HeaderStyled bgImage={bgImage} bgColor={bgColor} blur={blur}>
        {(bgImage || bgColor) && (
          <Background bgImage={bgImage} bgColor={bgColor} blur={blur} />
        )}

        {children && (
          <Content>
            {children}
          </Content>
        )}
      </HeaderStyled>
    )
  }
}

Header.propTypes = {
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  blur: PropTypes.bool,
  children: PropTypes.node,
}

Header.defaultProps = {
  bgImage: null,
  bgColor: '#ff0050',
  blur: false,
  children: null,
}
